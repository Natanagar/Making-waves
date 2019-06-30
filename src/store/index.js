import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/appReducer';


const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createHistory(),
  // others options if needed
});


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(routerMiddleware, thunk, logger),
  ),
);

export const history = createReduxHistory(store);
// if you use @reach/router
export const reachHistory = reachify(history);
export default store;
