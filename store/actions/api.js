import axios from "axios";
import _, { snakeCase } from "lodash";
import { API } from "../../CONSTANTS/API";
import DATA from "../../CONSTANTS/DATA";
import myData from "../../../assets/channels/channels.json";
export const FETCH_CACHE_DURATION = 60 * 1000;

// The action creator functions.
const apiBegin = (identifier, data) => {
  const type = snakeCase(identifier).toUpperCase();
  return { type: `${type}_BEGIN`, data: data };
};

const apiSuccess = (identifier, data) => {
  const type = snakeCase(identifier).toUpperCase();
  return { type: `${type}_SUCCESS`, data: data };
};

const apiError = (identifier, data) => {
  const type = snakeCase(identifier).toUpperCase();
  return { type: `${type}_ERROR`, data: data };
};

export const createFetchActionforJSON = (
  identifier = null,

  onSuccess = () => console.log("onSuccess"),
  onError = () => console.log("onError"),
  transformData = null
) => (dispatch, getState) => {
  const state = getState();

  if (myData) {
    if (transformData === null) {
      dispatch(apiSuccess(identifier, { data: myData }));
    } else {
      dispatch(
        apiSuccess(identifier, {
          data: transformData(myData, state),
        })
      );
    }
    onSuccess && onSuccess(myData);
    return myData;
  } else {
    console.log({ ERROR: myData });
    dispatch(apiError(identifier, { error: myData }));
  }
  return null;
};

export const createFetchAction = (
  url = null,
  identifier = null,
  method = "GET",
  body = null,
  extraPayload = {},
  onSuccess = () => console.log("onSuccess"),
  transformData = null,
  onError = () => console.log("onError")
) => (dispatch, getState) => {
  const state = getState();
  dispatch(apiBegin(identifier, url));

  axios({
    url: url,
    method: method,
    headers: { Accept: "application/json" },
    ...extraPayload,
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        if (transformData === null) {
          dispatch(apiSuccess(identifier, { data: response.data }));
        } else {
          dispatch(
            apiSuccess(identifier, {
              data: transformData(response.data, state),
            })
          );
        }
        onSuccess && onSuccess(response.data);
        return response.data;
      } else {
        console.log({ ERROR: response.data });
        dispatch(apiError(identifier, { error: response.data }));
      }
    })
    .catch((error) => {
      console.log({ URL: url, ERROR: error });
      onError() && onError(error);
      dispatch(apiError(identifier, { error: error }));
    });
  return null;
};

// Helpers

const getMuxUrl = (url, id = null) => {
  if (id === null) {
    return API.MUX.BASE_URL + url;
  } else {
    return API.MUX.BASE_URL + url.replace("{asset_id}", id);
  }
};

/*
 ** LiveTV actions
 */

export const liveTV_getChannels = () =>
  createFetchAction(
    API.IPTV.CHANNELS_JSON,
    "liveTV_channels",
    "GET",
    null,
    {},
    () => console.log("onSuccess"),
    (data, state) => {
      let country = "Albania";
      let channelsByCountry = new Object();
      console.log(data);
      data.forEach((item) => {
        if (item.name == "T7") {
          // console.log(item);
        }
        if (item && item.country && item.country.name) {
          country = item.country.name;
          if (!Object.keys(channelsByCountry).includes(country)) {
            channelsByCountry[country] = new Array();
          }

          channelsByCountry[country].push(item);
        }
      });

      const filteredChannels = _.pick(
        channelsByCountry,
        DATA.LIVE_TV_COUNTRIES
      );

      return {
        filteredChannels: filteredChannels,
      };
    },
    () => {
      console.log("onError");
    }
  );

/*
 ** MUX actions
 */

export const getChannelsfromJSON = () =>
  createFetchActionforJSON(
    "liveTV_channels",
    () => console.log("onSuccess"),
    () => console.log("onError"),
    (data, state) => {
      let country = "";
      let channelsByCountry = new Object();

      data.forEach((item) => {
        // if (item.group == "Albania") {
        //   console.log(item.name);
        // }
        if (item && item.group) {
          country = item.group;
          if (!Object.keys(channelsByCountry).includes(country)) {
            channelsByCountry[country] = new Array();
          }

          channelsByCountry[country].push(item);
        }
      });

      const filteredChannels = _.pick(
        channelsByCountry,
        DATA.LIVE_TV_COUNTRIES
      );
      console.log(filteredChannels);
      return {
        filteredChannels: filteredChannels,
      };
    }
  );

export const mux_getAssets = () =>
  createFetchAction(
    getMuxUrl(API.MUX.ASSETS.LIST_ASSETS),
    "mux_assets",
    "GET",
    null,
    {
      auth: {
        username: API.MUX.TOKEN_ID,
        password: API.MUX.TOKEN_SECRET,
      },
    },
    () => console.log("onSuccess"),
    null,
    () => {
      console.log("onError");
    }
  );

export const mux_getLiveStreams = () =>
  createFetchAction(
    getMuxUrl(API.MUX.LIVE_STREAMS.LIST_LIVE_STREAMS),
    "mux_liveStreams",
    "GET",
    null,
    {
      auth: {
        username: API.MUX.TOKEN_ID,
        password: API.MUX.TOKEN_SECRET,
      },
    },
    () => console.log("onSuccess"),
    null,
    () => {
      console.log("onError");
    }
  );

export const mux_createLiveStream = () =>
  createFetchAction(
    getMuxUrl(API.MUX.LIVE_STREAMS.CREATE_LIVE_STREAM),
    "mux_createLiveStream",
    "POST",
    null,
    {
      data: {
        playback_policy: "public",
        new_asset_settings: { playback_policy: "public" },
      },
      auth: {
        username: API.MUX.TOKEN_ID,
        password: API.MUX.TOKEN_SECRET,
      },
    },
    () => console.log("onSuccess"),
    null,
    () => {
      console.log("onError");
    }
  );
