import { HOME_LOGIN_REQ, HOME_LOGIN_SUCCESS, HOME_LOGIN_FAILED } from "../constants";

const initialState = {
  username: "",
  result: ""
};

export default (state = initialState, { type, payload }) => {
  
  switch (type) {    
    case HOME_LOGIN_REQ:
      return { ...state, username: "", result: "" };
    case HOME_LOGIN_SUCCESS:
      return { ...state, username: payload, result: "success" };
    case HOME_LOGIN_FAILED:
      return { ...state, username: "", result: "failed" };
    default:
      return state;
  }
};
