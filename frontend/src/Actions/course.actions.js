import axios from "../helpers/axios";
import { courseConstants } from "./constants";

export const getAllCourse = () => {
    return async dispatch => {
        dispatch({ type: courseConstants.GET_COURSE_REQUEST });


        await axios.get('/get/all/courses')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: courseConstants.GET_COURSE_SUCCESS,
                        payload: {
                            courses : res.data.courses
                        }
                    })
                }
                else {
                    dispatch({
                        type: courseConstants.GET_COURSE_FAILURE,
                        payload: {
                            message: "something wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: courseConstants.GET_COURSE_FAILURE,
                    payload: {
                        message: "something wrong!"
                    }
                })

            });
    }
}