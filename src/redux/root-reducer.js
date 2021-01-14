import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import Directory from "./directory/directory.reducer";
import ShopData from "./shop-data/shop-data.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: Directory,
  shop: ShopData
});

export default persistReducer(persistConfig, rootReducer);
