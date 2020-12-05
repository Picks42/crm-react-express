import userTypes from './mainAppTypes';
export const setToaster = msg => ({
  type: userTypes.SET_TOASTER_MSG,
  payload: msg
});
export const hideToaster = () => ({
  type: userTypes.HIDE_TOASTER
});