import { combineReducers } from "redux";
import userReducers from "./user.reducers";
import courseReducers from './course.reducers'

const rootReducer = combineReducers({
  user : userReducers,
  course : courseReducers
});
export default rootReducer;
