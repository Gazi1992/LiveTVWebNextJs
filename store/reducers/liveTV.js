import {
  ADD_FAVORITE_CHANNEL,
  CHANNEL_PLAYING,
  GET_CHANNELS,
  REMOVE_FAVORITE_CHANNEL,
} from "../actions/liveTV";

import DATA from "../../CONSTANTS/DATA";
import channelsData from "../../../assets/channels/channels.json";

const initialState = {
  channelPlaying: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30567",
  favoriteChannels: [
    {
      category: null,
      country: { code: "de", name: "Germany" },
      language: [{ code: "deu", name: "German" }],
      logo: "https://i.imgur.com/67z7iRh.jpg",
      name: "München TV",
      tvg: { id: null, name: null, url: null },
      url: "http://123tv-mx1.flex-cdn.net/index.m3u8",
    },
  ],
  channels: [],
};

const liveTVReducer = (state = initialState, action) => {
  let favorites = [...state.favoriteChannels];
  switch (action.type) {
    case CHANNEL_PLAYING:
      console.log("reduced " + action.data);
      return { ...state, channelPlaying: action.data };
    case ADD_FAVORITE_CHANNEL:
      const favoritesUrl = favorites.map((item) => item.url);
      if (!favoritesUrl.includes(action.data.url)) {
        favorites = [...favorites, action.data];
      }
      return { ...state, favoriteChannels: favorites };
    case REMOVE_FAVORITE_CHANNEL:
      console.log({ favorites: favorites, url: action.data.url });
      favorites = favorites.filter((item) => item.url !== action.data.url);
      return { ...state, favoriteChannels: favorites };
    case GET_CHANNELS:
      const channels = channelsData
        .filter((item) => item.id != null)
        .filter((item) => DATA.LIVE_TV_COUNTRIES.includes(item.group));
      return { ...state, channels: channels };
    default:
      return state;
  }
};

export default liveTVReducer;
