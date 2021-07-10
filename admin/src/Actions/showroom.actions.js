import axios from '../helpers/axios';
import { showroomConstants } from './constants';

export const getShowroom = () => {
    return async dispatch => {
        dispatch({ type: showroomConstants.GET_SHOWROOM_REQUEST });

        const res = await axios.get('/get/all/showrooms');

        if (res.status === 200) {

            dispatch({
                type: showroomConstants.GET_SHOWROOM_SUCCESS,
                payload: {
                    showrooms: res.data._showrooms
                }
            })
        }
        else {
            dispatchEvent({
                type: showroomConstants.GET_SHOWROOM_FAILURE,
                payload: {
                    message: "Something wrong"

                }

            })
        }
    }
}
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
}
export const editShowroom = (item) => {
    return async dispatch => {
        dispatch({ type: showroomConstants.EDIT_SHOWROOM_REQUEST });


        await axios.post('/edit/showroom', item)
            .then((res) => {
                if (res.status === 200) {
                    const showroom = res.data.showroom;
                    console.log(showroom);
                    dispatch({
                        type: showroomConstants.EDIT_SHOWROOM_SUCCESS,
                        payload: {
                            showroom
                        }
                    })
                }
                else {
                    dispatch({
                        type: showroomConstants.EDIT_SHOWROOM_FAILURE,
                        payload: {
                            message: "Something happend wrong!"
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: showroomConstants.EDIT_SHOWROOM_FAILURE,
                    payload: {
                        error,
                        message: "Something happend wrong!"
                    }
                })

            });
    }
}