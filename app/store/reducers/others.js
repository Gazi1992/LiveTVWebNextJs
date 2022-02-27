import DIMENSIONS from "../../CONSTANTS/DIMENSIONS";
import { ORIENTATION } from "../actions/others";

const initialState = {
    orientation: DIMENSIONS.SCREEN_PORTRAIT,
}

const otherReducers = (state = initialState, action) => {
    switch (action.type) {
        case ORIENTATION:
            return { ...state, orientation: action.data }
        default:
            return state;
    }
}

export default otherReducers;