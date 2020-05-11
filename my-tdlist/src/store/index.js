import {createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 

const enhancer = composeEnhancers(
  applyMiddleware(thunk,sagaMiddleware)
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga)
export default store