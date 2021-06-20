import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import reducers from './reducers';
import rootSaga from '../saga/index'
let store;
let sagaMiddleware  = createSagaMiddleware()
export function configureStore(initialState) {
  if (store) {
    return store;
  }
  
  store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga)
  
  return store;
}

export const storeDispatch = (action) => store.dispatch(action);