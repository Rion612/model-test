import axios from "../helpers/axios";
import { paymentConstants } from "./constants";

export const getPaymentDetails = () => {
    return async dispatch => {
        dispatch({ type: paymentConstants.GET_PAYMENT_DETAILS_REQUEST});


        await axios.get('/get/payment/details')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: paymentConstants.GET_PAYMENT_DETAILS_SUCCESS,
                        payload: {
                            details : res.data.paymentDetails
                        }
                    })
                }
                else {
                    dispatch({
                        type: paymentConstants.GET_PAYMENT_DETAILS_FAILURE,
                        payload: {
                            message: "something wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: paymentConstants.GET_PAYMENT_DETAILS_FAILURE,
                        payload: {
                            message: "something wrong!"
                        }
                })

            });
    }
}