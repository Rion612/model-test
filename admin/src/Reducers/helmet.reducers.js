import { helmetConstants } from "../Actions/constants"

const initState={
    error :"",
    loading : false,
    helmets :[]
}



export default (state = initState,action)=>{
    switch(action.type){
        case helmetConstants.GET_HELMET_REQUEST:
            state={
                ...initState,
                loadingL:true
            }
            break;
        case helmetConstants.GET_HELMET_SUCCESS:
            state={
                ...state,
                loading:false,
                helmets : action.payload.helmets
            }
            break;
        case helmetConstants.GET_HELMET_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
    }
    return state;

}