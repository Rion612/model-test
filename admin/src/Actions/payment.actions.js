import axios from '../helpers/axios';
import { paymentConstants } from './constants';

export const getPayment = () => {
    return async dispatch => {
        dispatch({ type: paymentConstants.GET_PAYMENT_REQUEST });

        const res = await axios.get('/get/payment/details');

        if (res.status === 200) {

            dispatch({
                type: paymentConstants.GET_PAYMENT_SUCCESS,
                payload: {
                    payments: res.data.paymentDetails
                }
            })
        }
        else {
            dispatch({
                type: paymentConstants.GET_PAYMENT_FAILURE,
                payload: {
                    message: "Something is wrong!"

                }

            })
        }
    }
}
/*
export const createShowroom = (form) => {
    return async dispatch => {
        dispatch({ type: showroomConstants.ADD_SHOWROOM_REQUEST });


        await axios.post('/create/showroom', form)
            .then((res) => {
                if (res.status === 201) {

                    dispatch({
                        type: showroomConstants.ADD_SHOWROOM_SUCCESS,
                        payload: {
                            showrooms: res.data.showrooms
                        }
                    })
                }
                else {
                    dispatch({
                        type: showroomConstants.ADD_SHOWROOM_FAILURE,
                        payload: {
                            message: res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: showroomConstants.ADD_SHOWROOM_FAILURE,
                    payload: {
                        error,
                        message: "Something happend wrong!"
                    }
                })

            });
    }
}
export const deleteShowroom = (item) => {
    return async dispatch => {
        dispatch({ type: showroomConstants.DEL_SHOWROOM_REQUEST });

        await axios.post('/delete/showroom', item)
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: showroomConstants.DEL_SHOWROOM_SUCCESS,
                        payload: {
                            message: res.data.message,
                            id: item._id
                        }
                    })
                }
                else {
                    dispatch({
                        type: showroomConstants.DEL_SHOWROOM_FAILURE,
                        payload: {
                            message: "Something happend wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: showroomConstants.DEL_SHOWROOM_FAILURE,
                    payload: {
                        error,
                        message: "Something happend wrong!"
                    }
                })

            });
    }
}*/
export const makeApproved = (item) => {
    return async dispatch => {
        dispatch({ type: paymentConstants.EDIT_PAYMENT_REQUEST });


        await axios.post('/user/apyment/approve', item)
            .then((res) => {
                if (res.status === 200) {
                    const payment = res.data.data;
                    dispatch({
                        type: paymentConstants.EDIT_PAYMENT_SUCCESS,
                        payload: {
                            payment
                        }
                    })
                }
                else {
                    dispatch({
                        type: paymentConstants.EDIT_PAYMENT_FAILURE,
                        payload: {
                            message: "Something happend wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: paymentConstants.EDIT_PAYMENT_FAILURE,
                    payload: {
                        message: "Something happend wrong!"
                    }
                })

            });
    }
}