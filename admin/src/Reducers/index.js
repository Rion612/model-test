import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import courseReducers from './course.reducers';
import paymentReducers from './payment.reducers';
import userReducers from './user.reducers'
import helmetbrandReducers from './helemt.brand.reducers'

const rootReducer = combineReducers({
  category: categoryReducers,
  course : courseReducers,
  payment : paymentReducers,
  user : userReducers,
  helmetBrands : helmetbrandReducers

});
export default rootReducer;
