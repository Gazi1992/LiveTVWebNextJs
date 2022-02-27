import axios from "axios";
import Auth from "@aws-amplify/auth";
import { API } from "aws-amplify";
import _, { snakeCase } from "lodash";
import { APIS } from "../../CONSTANTS/APIS";
import DATA from "../../CONSTANTS/DATA";

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

const callWebAPI = async (method, path, body) => {
  const apiName = "LiveTV";
  const iPath = path;
  const myInit = { body };
  switch (method.toUpperCase()) {
    case "GET":
      return API.get(apiName, iPath, myInit);
    case "POST":
      return API.post(apiName, iPath, myInit);
    default:
      return API.post(apiName, iPath, myInit);
  }
};

export const createFetchAction =
  (
    url = null,
    identifier = null,
    method = "POST",
    body = {},
    extraPayload = {},
    onSuccess = () => console.log("onSuccess"),
    transformData = null,
    onError = () => console.log("onError"),
    authRequired = true
  ) =>
  async (dispatch, getState) => {
    const state = getState();
    dispatch(apiBegin(identifier, url));
    try {
      const data = await callWebAPI(
        method,
        url,
        authRequired ? { ...body, userId: state.userAWS.id } : body
      );
      if (transformData == null) {
        dispatch(apiSuccess(identifier, { data: data }));
      } else {
        dispatch(apiSuccess(identifier, { data: transformData(data, state) }));
      }
      onSuccess && onSuccess(data);
      return data;
    } catch (error) {
      console.log({ URL: url, ERROR: error });
      onError() && onError(error);
      dispatch(apiError(identifier, { error: error }));
    }

    // axios({
    //     'url': url,
    //     'method': method,
    //     'headers': { 'Accept': 'application/json', },
    //     ...extraPayload,
    // }).then(response => {
    //     if (response.status == 200 || response.status == 201) {
    //         if (transformData == null) {
    //             dispatch(apiSuccess(identifier, { data: response.data }));
    //         } else {
    //             dispatch(apiSuccess(identifier, { data: transformData(response.data, state) }));
    //         }
    //         onSuccess && onSuccess(response.data);
    //         return response.data;
    //     } else {
    //         console.log({ ERROR: response.data })
    //         dispatch(apiError(identifier, { error: response.data }));
    //     }
    // }).catch(error => {
    //     console.log({ URL: url, ERROR: error })
    //     onError() && onError(error);
    //     dispatch(apiError(identifier, { error: error }));
    // })

    return null;
  };

/************************************* LiveTV actions ****************************************/
export const liveTV_getChannels = () =>
  createFetchAction(
    APIS.IPTV.CHANNELS_JSON,
    "liveTV_channels",
    "GET",
    null,
    {},
    () => console.log("onSuccess"),
    (data, state) => {
      let country = "";
      let channelsByCountry = new Object();
      data.forEach((item) => {
        if (
          item &&
          item.countries &&
          item.countries[0] &&
          item.countries[0].name
        ) {
          country = item.countries[0].name;
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

/*************************************** User actions ****************************************/

export const user_get = (
  onSuccess = () => {
    console.log("user_get success");
  },
  onError = () => {
    console.log("user_get error");
  }
) =>
  createFetchAction(
    "/user/get",
    "user",
    "POST",
    {},
    {},
    onSuccess,
    (data, state) => {
      var favoriteChannels = [];
      if (data.content.favoriteChannels != null) {
        favoriteChannels = data.content.favoriteChannels.split(",").map(Number);
      }
      return { ...data.content, favoriteChannels: favoriteChannels };
    },
    onError,
    true
  );

export const user_update = (
  body = {},
  onSuccess = () => {
    console.log("user_update success");
  },
  onError = () => {
    console.log("user_update error");
  }
) =>
  createFetchAction(
    "/user/update",
    "user_update",
    "POST",
    body,
    {},
    onSuccess,
    null,
    onError,
    true
  );

export const user_event = (
  body = {},
  onSuccess = () => {
    console.log("user_event success");
  },
  onError = () => {
    console.log("user_event error");
  }
) =>
  createFetchAction(
    "/user/event",
    "user_event",
    "POST",
    body,
    {},
    onSuccess,
    null,
    onError,
    true
  );

/*************************************** Channels actions ****************************************/

export const channels_get = (
  onSuccess = () => {
    console.log("channels_get success");
  },
  onError = () => {
    console.log("channels_get error");
  }
) =>
  createFetchAction(
    "/channels/get",
    "channels",
    "POST",
    {},
    {},
    onSuccess,
    (data, state) => {
      return data.content;
    },
    onError,
    false
  );

export const channels_toggleFavorite = (
  channelId = null,
  onSuccess = () => {
    console.log("channels_toggleFavorite success");
  },
  onError = () => {
    console.log("channels_toggleFavorite error");
  }
) =>
  createFetchAction(
    "/channels/toggleFavorite",
    "channels_toggleFavorite",
    "POST",
    { channelId: channelId },
    {},
    onSuccess,
    null,
    onError,
    true
  );
