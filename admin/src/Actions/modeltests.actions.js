import axios from "../helpers/axios";
import { modelTestConstants } from "./constants";

export const getAllModelTest = () => {
    return async dispatch => {
        dispatch({ type: modelTestConstants.GET_MODELTEST_REQUEST });


        await axios.get('/get/all/model-tests')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: modelTestConstants.GET_MODELTEST_SUCCESS,
                        payload: {
                            modeltests: res.data.modeltests
                        }
                    })
                }
                else {
                    dispatch({
                        type: modelTestConstants.GET_MODELTEST_FAILURE,
                        payload: {
                            message: res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: modelTestConstants.GET_MODELTEST_FAILURE,
                    payload: {
                        error,
                        message: "Something happend wrong!"
                    }
                })

            });
    }
}
// export const editHelmetBrand = (form) => {
//     return async dispatch => {
//         dispatch({ type: helemtbrandConstants.EDIT_HELMET_BRAND_REQUEST });


//         await axios.post('/edit/helmet/brand', form)
//             .then((res) => {
//                 if (res.status === 200) {

//                     dispatch({
//                         type: helemtbrandConstants.EDIT_HELMET_BRAND_SUCCESS,
//                         payload: {
//                             helmetBrand: res.data.helmetbrand
//                         }
//                     })
//                 }
//                 else {
//                     dispatch({
//                         type: helemtbrandConstants.EDIT_HELMET_BRAND_FAILURE,
//                         payload: {
//                             message: res.data.message
//                         }
//                     })
//                 }

//             })
//             .catch((error) => {
//                 dispatch({
//                     type: helemtbrandConstants.EDIT_HELMET_BRAND_FAILURE,
//                     payload: {
//                         error,
//                         message: "Something happend wrong!"
//                     }
//                 })

//             });
//     }
// }
// export const deleteHelmetBrand = (item) => {
//     return async dispatch => {
//         dispatch({ type: helemtbrandConstants.DEL_HELMET_BRAND_REQUEST });

//         await axios.post('/delete/helmet/brand', item)
//             .then((res) => {
//                 if (res.status === 200) {

//                     dispatch({
//                         type: helemtbrandConstants.DEL_HELMET_BRAND_SUCCESS,
//                         payload: {
//                             message: res.data.message,
//                             id: item._id
//                         }
//                     })
//                 }
//                 else {
//                     dispatch({
//                         type: helemtbrandConstants.DEL_HELMET_BRAND_FAILURE,
//                         payload: {
//                             message: res.data.message
//                         }
//                     })
//                 }

//             })
//             .catch((error) => {
//                 dispatch({
//                     type: helemtbrandConstants.DEL_HELMET_BRAND_FAILURE,
//                     payload: {
//                         error,
//                         message: "Something happend wrong!"
//                     }
//                 })

//             });
//     }
// }
// export const createHelmetBrand = (form) => {
//     return async dispatch => {
//         dispatch({ type: helemtbrandConstants.ADD_HELMET_BRAND_REQUEST });

//         await axios.post('/create/helmet/brand', form)
//             .then((res) => {
//                 if (res.status === 201) {

//                     dispatch({
//                         type:helemtbrandConstants.ADD_HELMET_BRAND_SUCCESS,
//                         payload:{
//                             helmetbrands:res.data.helmetbrands
//                         }
//                     })
//                 }
//                 else {
//                     dispatch({
//                         type:helemtbrandConstants.ADD_HELMET_BRAND_FAILURE,
//                         payload:{
//                             message:res.data.message
//                         }
//                     })
//                 }

//             })
//             .catch((error) => {
//                 dispatch({
//                     type:helemtbrandConstants.ADD_HELMET_BRAND_FAILURE,
//                     payload:{
//                         message :"Something happend wrong!"
//                     }
//                 })

//             });

//     }
// }
