import {
  ADD_FAVORITE_CHANNEL,
  CHANNEL_PLAYING,
  GET_CHANNELS,
  REMOVE_FAVORITE_CHANNEL,
} from "../actions/liveTV";
import channelsData from "../../../assets/channels/channels.json";
import DATA from "../../CONSTANTS/DATA";

const initialState = {
  channelPlaying: null,
  favoriteChannels: [
    // {
    //     logo: "https://abcnews.al/wp-content/uploads/2020/11/cropped-abclogo.png",
    //     name: "ABC News",
    //     url: "https://tv2.abcnews.al/live/abcnews/playlist.m3u8",
    //     // url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30559",
    // },
    {
      id: "top.al",
      name: "Top Channel FHD",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL075TopChannelHD.png",
      //"url": "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30559",
      url: "https://tv2.abcnews.al/live/abcnews/playlist.m3u8",
      group: "Albania",
    },
    {
      id: "klan.al",
      name: "KLAN FHD",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL033KLANHD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30601",
      group: "Albania",
    },
    {
      id: "supersport.1.al",
      name: "Super Sport 1 HD",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL004SuperSport1HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30630",
      group: "Albania",
    },
    {
      id: "supersport.2.al",
      name: "Super Sport 2 HD",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL003SuperSport2HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30631",
      group: "Albania",
    },
    {
      id: "supersport.3.al",
      name: "Super Sport 3 HD",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL002SuperSport3HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30632",
      group: "Albania",
    },
    {
      id: "supersport.4.al.al",
      name: "Super Sport 4 HD",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL001SuperSport4HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30633",
      group: "Albania",
    },
    {
      id: "supersport.5.al",
      name: "SuperSport 5",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL078SuperSport5.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30556",
      group: "Albania",
    },
    {
      id: "tring.sport.1.al",
      name: "Tring Sport 1",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL012TringSport2HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30622",
      group: "Albania",
    },
    {
      id: "tring.sport.2.al",
      name: "Tring Sport 2",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL065TRINGSPORT4HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30569",
      group: "Albania",
    },
    {
      id: "tring.sport.3.al",
      name: "Tring Sport 3",
      logo: "http://www.tvboxgroup.com/iptv/logo/AL/AL066TRINGSPORT1HD.png",
      url: "http://acc2.aatvbox.club:8880/s4453/ZdakvPbSPy/30568",
      group: "Albania",
    },
  ],
  channels: [],
};

const liveTVReducer = (state = initialState, action) => {
  let favorites = [...state.favoriteChannels];
  switch (action.type) {
    case CHANNEL_PLAYING:
      return { ...state, channelPlaying: action.data };
    case ADD_FAVORITE_CHANNEL:
      const favoritesUrl = favorites.map((item) => item.url);
      if (!favoritesUrl.includes(action.data.url)) {
        favorites = [...favorites, action.data];
      }
      return { ...state, favoriteChannels: favorites };
    case REMOVE_FAVORITE_CHANNEL:
      favorites = favorites.filter((item) => item.url != action.data.url);
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
