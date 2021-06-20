import { combineReducers } from "redux";
import userReducers from "./user.reducers";
import courseReducers from './course.reducers'
import paymentReducers from "./payment.reducers";

const rootReducer = combineReducers({
  user : userReducers,
  course : courseReducers,
  payment : paymentReducers
});
export default rootReducer;
