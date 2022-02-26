import { snakeCase } from "lodash";

const createFetchReducer = (identifier) => {
  const ACTION_TYPE = snakeCase(identifier).toUpperCase();
  return (state = { isFetching: false }, { type, data }) => {
    switch (type) {
      case `${ACTION_TYPE}_BEGIN`:
        return {
          ...state,
          isFetching: true,
        };
      case `${ACTION_TYPE}_SUCCESS`:
        return {
          ...data,
          isFetching: false,
        };
      case `${ACTION_TYPE}_ERROR`:
        return {
          ...state,
          isFetching: false,
        };
      default:
        return state;
    }
  };
};

// Movies reducers
const movies_genres = createFetchReducer("movies_genres", null);
const movies_configuration = createFetchReducer("movies_configuration", null);
const movies_topRated = createFetchReducer("movies_topRated", null);
const movies_popular = createFetchReducer("movies_popular", null);
const movies_nowPlaying = createFetchReducer("movies_nowPlaying", null);
const movies_upcoming = createFetchReducer("movies_upcoming", null);
const movies_details = createFetchReducer("movies_details", null);
const movies_providers = createFetchReducer("movies_providers", null);
const movies_similar = createFetchReducer("movies_similar", null);

// LiveTV reducers
const liveTV_channels = createFetchReducer("liveTV_channels", null);

// Mux reducers
const mux_assets = createFetchReducer("mux_assets", null);
const mux_liveStreams = createFetchReducer("mux_liveStreams", null);

const apiReducers = {
  movies_genres,
  movies_configuration,
  movies_topRated,
  movies_popular,
  movies_nowPlaying,
  movies_upcoming,
  movies_details,
  movies_providers,
  movies_similar,

  liveTV_channels,

  mux_assets,
  mux_liveStreams,
};

export default apiReducers;
