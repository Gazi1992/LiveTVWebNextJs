export const API = {
  MOVIES: {
    TMDB: {
      BASE_URL: "https://api.themoviedb.org/3",
      API_KEY: "?api_key=ac17c2ca3b9783f77c7497f737214285",
      GENRES: "/genre/movie/list",
      CONFIGURATION: "/configuration",
      TOP_RATED: "/movie/top_rated",
      POPULAR: "/movie/popular",
      LATEST: "/movie/latest",
      NOW_PLAYING: "/movie/now_playing",
      UPCOMING: "/movie/upcoming",
      DETAILS: "/movie/{movie_id}",
      PROVIDERS: "/movie/{movie_id}/watch/providers",
      SIMILAR: "/movie/{movie_id}/similar",
    },
  },
  IPTV: {
    M3U_URL: "https://iptv-org.github.io/iptv/index.m3u",
    // CHANNELS_JSON: 'https://iptv-org.github.io/iptv/channels.json',
    CHANNELS_JSON: "assets/channels/channels.json",
    //"http://acc2.aatvbox.club:8880/get.php?username=s4453&password=ZdakvPbSPy&type=m3u_plus",
    // CHANNELS_JSON: "https://vpul.github.io/iptv-player/channels.json",
  },
  MUX: {
    TOKEN_ID: "ec43d298-e001-47a5-9392-15c4a4205626",
    TOKEN_SECRET:
      "hQr0f63e4img9jvNuyUU1ABfUHe7AZDxx8yX7kkX+aGOyhhTTXKJ4UTGQPPgg12rzYS+fdhcmkq",
    BASE_URL: "https://api.mux.com/video/v1",
    ASSETS: {
      LIST_ASSETS: "/assets",
    },
    LIVE_STREAMS: {
      LIST_LIVE_STREAMS: "/live-streams",
      CREATE_LIVE_STREAM: "/live-streams",
    },
  },
};
