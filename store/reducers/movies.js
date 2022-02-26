import { FOCUSED_MOVIE } from "../actions/movies";

const initialState = {
    focusedMovie: {},
}

const moviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOCUSED_MOVIE:
            return { ...state, focusedMovie: action.data }
        default:
            return state;
    }
}

export default moviesReducer;