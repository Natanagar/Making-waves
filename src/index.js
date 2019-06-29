import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'thunk';
import App from './App';
import './index.css';
import rootReducer from './reducers/appReducer';
import * as serviceWorker from './serviceWorker';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
