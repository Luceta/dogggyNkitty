import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";
import ui from "./auth";

const userPersistConfig = {
  key: "user",
  storage,
};

const authPersistConfig = {
  key: "ui",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, user),
  ui: persistReducer(authPersistConfig, ui),
});

export default rootReducer;
