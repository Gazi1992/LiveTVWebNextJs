import { SET_USER_AWS } from "../actions/userAWS";

const initialState = {};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_AWS:
            return { ...state, ...action.data };
        default:
            return state;
    }
}

export default userReducer;