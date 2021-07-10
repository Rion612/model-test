import axios from "../helpers/axios";
import { courseConstants } from "./constants";

export const getCourses = () => {
    return async dispatch => {
        dispatch({ type: courseConstants.GET_COURSE_REQUEST });


        await axios.get('/get/all/courses')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: courseConstants.GET_COURSE_SUCCESS,
                        payload: {
                            courses: res.data.courses
                        }
                    })
                }
                else {
                    dispatch({
                        type: courseConstants.GET_COURSE_FAILURE,
                        payload: {
                            message: "Something is wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: courseConstants.GET_COURSE_FAILURE,
                    payload: {
                        message: "Something is wrong!"
                    }
                })

            });
    }
}
/*
export const editBrand = (form) => {
    return async dispatch => {
        dispatch({ type: brandConstants.EDIT_BRAND_REQUEST });


        const res = await axios.post('/edit/bike/brand', form);
        if (res.status === 200) {
            dispatch({
                type: brandConstants.EDIT_BRAND_SUCCESS,
                payload: {
                    brand: res.data.bikebarnd,
                }
            })
        }
        else {
            dispatch({
                type: brandConstants.EDIT_BRAND_FAILURE,
                payload: {
                    message: "Something wrong"
                }
            })
        }
    }
}
export const deleteBrand = (item) => {
    return async dispatch => {
        dispatch({ type: brandConstants.DEL_BRAND_REQUEST });

        const res = await axios.post('/delete/bike/brand', item);
        if (res.status === 200) {
            dispatch({
                type: brandConstants.DEL_BRAND_SUCCESS,
                payload: {
                    message: res.data.message,
                    id: item._id
                }
            })
        }
        else {
            dispatch({
                type: brandConstants.DEL_BRAND_FAILURE,
                payload: {
                    message: "Something wrong"
                }
            })
        }
    }
}

export const createBrand = (form) => {
    return async dispatch => {
        dispatch({ type: brandConstants.ADD_BRAND_REQUEST });

        await axios.post('/create/bike/brand', form)
            .then((res) => {
                if (res.status === 201) {

                    dispatch({
                        type:brandConstants.ADD_BRAND_SUCCESS,
                        payload:{
                            bikeBrand:res.data.bikeBrand
                        }
                    })
                }
                else {
                    dispatch({
                        type:brandConstants.ADD_BRAND_FAILURE,
                        payload:{
                            message:res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type:brandConstants.ADD_BRAND_FAILURE,
                    payload:{
                        message :"Something happend wrong!"
                    }
                })

            });

    }
}*/