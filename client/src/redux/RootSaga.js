import { all, call } from 'redux-saga/effects';

/* Main App Saga */
import {mainAppSaga} from './main-app/mainAppSaga'
/* Thank you Saga */
export function* rootSaga() {
  yield all([
    call(mainAppSaga)
  ])
}