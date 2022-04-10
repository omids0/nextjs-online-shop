import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToBasketReducer } from "./reducers/basketReducers";
import { productsReducer } from "./reducers/productReducer";

const finalReducers = combineReducers({
  addToBasketReducer: addToBasketReducer,
  productsReducer: productsReducer,
});

const initialState = {};

const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
