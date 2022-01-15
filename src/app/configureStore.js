import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let myMiddleware;

if (process.env.NODE_ENV === "development") {
  myMiddleware = applyMiddleware(logger, thunk);
} else {
  myMiddleware = applyMiddleware(thunk);
}

export default () => {
  const store = createStore(persistedReducer, myMiddleware);
  const persistor = persistStore(store);
  return { store, persistor };
};
