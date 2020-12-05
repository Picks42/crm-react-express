import { createStore, applyMiddleware ,compose } from 'redux';
import { logger } from 'redux-logger';
import RootReducer from './RootReducer';
import { persistStore } from 'redux-persist';
import {rootSaga} from './RootSaga';
import createSagaMiddleware from 'redux-saga';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [];
middleware.push(sagaMiddleware);

let enhancer;
if (process.env.NODE_ENV === 'development' && window.location.pathname !== '/thank-you') {
  middleware.push(logger);
   enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );
}
else{
  enhancer = applyMiddleware(...middleware);
}


const store = createStore(RootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };