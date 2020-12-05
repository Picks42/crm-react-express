import { takeLatest, put, all, call } from 'redux-saga/effects';
import mainAppTypes from './mainAppTypes';
import { hideToaster } from './mainAppAction';



function* hideToasterAction() {
  yield setTimeout(2000, () => {
    put(hideToaster());
  });
}
export function* hideToasterSaga() {
  yield takeLatest(
    mainAppTypes.SET_TOASTER_MSG,
    hideToasterAction
  )
}



export function* mainAppSaga() {
  yield all([
    call(hideToasterSaga),
  ]);
}
