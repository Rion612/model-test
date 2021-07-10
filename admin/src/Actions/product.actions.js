import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const addProduct = (form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });

    const token = localStorage.getItem("token");
    const res = await axios.post("/product/create", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 201) {
    }
  };
};
