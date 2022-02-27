import _, { snakeCase } from 'lodash'

const createFetchReducer = (identifier) => {
    const ACTION_TYPE = snakeCase(identifier).toUpperCase();
    return (state = { isFetching: false }, { type, data }) => {
        switch (type) {
            case `${ACTION_TYPE}_BEGIN`:
                return {
                    ...state,
                    isFetching: true,
                }
            case `${ACTION_TYPE}_SUCCESS`:
                return {
                    ...data,
                    isFetching: false,
                }
            case `${ACTION_TYPE}_ERROR`:
                return {
                    ...state,
                    isFetching: false,
                }
            default:
                return state
        }
    }
}

// LiveTV reducers
const liveTV_channels = createFetchReducer('liveTV_channels', null);
// const liveTV_channels1 = createFetchReducer('liveTV_channels1', null);

// User reducers
const user = createFetchReducer('user', null);

// Channels reducers
const channels = createFetchReducer('channels', null);

const apiReducers = {
    liveTV_channels,
    // liveTV_channels1,

    user,

    channels,
}

export default apiReducers;