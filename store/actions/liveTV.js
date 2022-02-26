export const CHANNEL_PLAYING = 'CHANNEL_PLAYING';
export const ADD_FAVORITE_CHANNEL = 'ADD_FAVORITE_CHANNEL';
export const REMOVE_FAVORITE_CHANNEL = 'REMOVE_FAVORITE_CHANNEL';
export const GET_CHANNELS = 'GET_CHANNELS';

export const setChannelPlaying = (data) => {
    return { type: CHANNEL_PLAYING, data: data }
}

export const addFavoriteChannel = (data) => {
    return { type: ADD_FAVORITE_CHANNEL, data: data }
}

export const removeFavoriteChannel = (data) => {
    return { type: REMOVE_FAVORITE_CHANNEL, data: data }
}

export const getChannels = (data) => {
    return { type: GET_CHANNELS, data: data }
}
