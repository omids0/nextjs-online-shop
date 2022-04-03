import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const finalReducers = combineReducers({});

const initialState = {};

const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
