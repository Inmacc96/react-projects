import { DISPLAY_ALERT, HIDE_ALERT } from "../types";

//Cada reducer tiene su propio state
const initialState = {
  alert: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
}
