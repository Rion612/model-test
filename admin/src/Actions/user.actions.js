import axios from "../helpers/axios";
import { userConstants } from "./constants";

export const getAllUser = ()=>{
    return async dispatch=>{


        dispatch({type : userConstants.GET_ALL_USER_REQUEST});

        await axios.get('/get/all/user/info')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type:userConstants.GET_ALL_USER_SUCCESS,
                        payload:{
                            users:res.data.users
                        }
                    })
                }
                else {
                    dispatch({
                        type:userConstants.GET_ALL_USER_FAILURE,
                        payload:{
                            message:"Something is wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type:userConstants.GET_ALL_USER_FAILURE,
                    payload:{
                        message :"Something happend wrong!"
                    }
                })

            });


        
    }
}
export const deleteUser= (item) => {
    return async dispatch => {
        dispatch({ type: userConstants.DEL_USER_REQUEST });

        await axios.post('/delete/user', item)
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: userConstants.DEL_USER_SUCCESS,
                        payload: {
                            message: res.data.message,
                            id: item._id
                        }
                    })
                }
                else {
                    dispatch({
                        type: userConstants.DEL_USER_FAILURE,
                        payload: {
                            message: "Something happend wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: userConstants.DEL_USER_FAILURE,
                    payload: {
                        error,
                        message: "Something happend wrong!"
                    }
                })

            });
    }
}