import { userConstants } from "../Actions/constants"

const initState={
    error :"",
    loading : false,
    users :[]
}



export default (state = initState,action)=>{
    switch(action.type){
        case userConstants.GET_ALL_USER_REQUEST:
            state={
                ...initState,
                loadingL:true
            }
            break;
        case userConstants.GET_ALL_USER_SUCCESS:
            state={
                ...state,
                loading:false,
                users : action.payload.users
            }
            break;
        case userConstants.GET_ALL_USER_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
    }
    return state;

}