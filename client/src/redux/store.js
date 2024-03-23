import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as taskReducer } from "./taskReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";

const rootReducer = combineReducers({
  taskReducer,
  authReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
