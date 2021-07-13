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