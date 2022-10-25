import { DISPLAY_ALERT, HIDE_ALERT } from "../types";

//Cada reducer tiene su propio state
const initialState = {
  alert: null,
};

export default function (state = initialState, action) {
    switch(action.type){
        default:
            return state;
    }
}
