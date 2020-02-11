import { combineReducers } from "redux";
import tasks from "./tasks";
import appStatus from "./appStatus";

const rootReducer = combineReducers({
  tasks,
  appStatus
});

export default rootReducer;
