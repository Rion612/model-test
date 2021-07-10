import { combineReducers } from "redux";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";
import courseReducers from './course.reducers';
import showroomReducers from './showroom.reducers';
import helmetReducers from './helmet.reducers'
import helmetbrandReducers from './helemt.brand.reducers'

const rootReducer = combineReducers({
  product: productReducers,
  category: categoryReducers,
  course : courseReducers,
  showroom : showroomReducers,
  helmets : helmetReducers,
  helmetBrands : helmetbrandReducers

});
export default rootReducer;
