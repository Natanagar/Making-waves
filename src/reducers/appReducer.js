import { combineReducers } from 'redux';

const initialState = Object.freeze({});


const rootReducer = combineReducers({
  appReducer,

});
const appReducer = (state = initialState, action) => {
  /*switch (action.type) {
    case FETCH_CURRENCY_PENDING:
      return {
        ...state,
        isLoading: true,
      };*/
    default:
      return state;
  }
};
export default rootReducer;
