import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import courseReducers from './course.reducers';
import paymentReducers from './payment.reducers';
import userReducers from './user.reducers';
import modeltestReducers from "./modeltest.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  course : courseReducers,
  payment : paymentReducers,
  user : userReducers,
  modeltest: modeltestReducers

});
export default rootReducer;
