import { ADD_USER, LOGOUT } from "../constant";

const initialState = {
  userDetails: {},
  signedUp: false
};

const userManagementReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ADD_USER:
      return {
        ...state,
        userDetails: {...payload},
        signedUp: true
      };
    case LOGOUT:
      return {
        ...state,
        userDetails: {},
        signedUp: false
      };
    default:
      return state;
  }
};

export default userManagementReducer;