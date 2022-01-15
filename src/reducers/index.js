import { combineReducers } from "redux";
// reducer 가져오기
import user from "./user";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
