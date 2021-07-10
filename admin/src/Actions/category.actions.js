
import axios from "../helpers/axios";
import {  categoryConstants } from "./constants"

export const getCategory = ()=>{
    return async (dispatch) => {
        dispatch({type:categoryConstants.GET_CATEGORY_REQUEST});


        const res = await axios.get('/get/bike/categories');
        
        if(res.status === 200){

            const {bikeCategory} = res.data;
           
            dispatch({
                type:categoryConstants.GET_CATEGORY_SUCCESS,
                payload:{
                    bikeCategory:bikeCategory
                }
            })
        }
        else{
            if(res.status === 400){
                dispatchEvent({
                    type:categoryConstants.GET_CATEGORY_FAILURE,
                    payload:{
                        message:"Something wrong"

                    }
                    
                })
            }
        }

    }
}

export const createCategory=(form)=>{
    return async dispatch =>{
        dispatch({type: categoryConstants.ADD_CATEGORY_REQUEST});

        const res = await axios.post('/create/bike/category',form);
        if(res.status === 201){
            dispatch({
                type:categoryConstants.ADD_CATEGORY_SUCCESS,
                payload:{
                    Category:res.data.bikeCategory
                }
            })
        }
        else{
            dispatch({
                type:categoryConstants.GET_CATEGORY_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}
export const deleteCategory=(item)=>{
    return async dispatch =>{
        dispatch({type: categoryConstants.DEL_CATEGORY_REQUEST});

        const res = await axios.post('/delete/bike/category',item);
        if(res.status === 200){
            dispatch({
                type:categoryConstants.DEL_CATEGORY_SUCCESS,
                payload:{
                    message:res.data.message,
                    id : item._id
                }
            })
        }
        else{
            dispatch({
                type:categoryConstants.DEL_CATEGORY_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}
export const editCategory=(form)=>{
    return async dispatch =>{
        dispatch({type: categoryConstants.EDIT_CATEGORY_REQUEST});

        const res = await axios.post('/edit/bike/category',form);
        if(res.status === 200){
            dispatch({
                type:categoryConstants.EDIT_CATEGORY_SUCCESS,
                payload:{
                    Category:res.data.bikeCategory,
                }
            })
        }
        else{
            dispatch({
                type:categoryConstants.EDIT_CATEGORY_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}