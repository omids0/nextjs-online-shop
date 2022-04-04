import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToBasketReducer } from "./reducers/basketReducers";

const finalReducers = combineReducers({
  addToBasketReducer: addToBasketReducer,
});

const initialState = {};

const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
