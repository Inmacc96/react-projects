import { DISPLAY_ALERT, HIDE_ALERT } from "../types";

//Muestra una alerta
export function displayAlertAction(alert) {
  return (dispatch) => {
    dispatch(displayAlert(alert));
  };
}

const displayAlert = (alert) => ({
  type: DISPLAY_ALERT,
  payload: alert,
});

//Oculta una alerta
export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert());
  };
}

const hideAlert = () => ({
  type: HIDE_ALERT,
});
