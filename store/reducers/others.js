import { FREE_TRIAL_ICON, PACKAGE } from "../actions/others";

const initialState = {
  freeTrialIcon: false,
  package: {
    name: "Edon",
    price: 100,
    time: 1,
  },
  test: "test",
};

const otherReducers = (state = initialState, action) => {
  switch (action.type) {
    case PACKAGE:
      console.log(action.data);
      return {
        ...state,
        package: action.data,
      };
    case FREE_TRIAL_ICON:
      return { ...state, freeTrialIcon: action.data };
    default:
      return state;
  }
};

export default otherReducers;
