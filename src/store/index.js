import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/appReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// for testing in browser
window.store = store;
