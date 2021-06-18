import { courseConstants } from '../Actions/constants';

const initialState = {
    message :"",
    error :null,
    loading : false,
    courses : []
}


export default (state= initialState,action)=>{
    switch(action.type){
        case courseConstants.GET_COURSE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case courseConstants.GET_COURSE_SUCCESS:
            state = {
                ...state,
                loading: false,
                courses : action.payload.courses
            }
            break;
        case courseConstants.GET_COURSE_FAILURE:
            state = {
                ...state,
                error: true,
                message: action.payload.message,
            }
            break;
    }
    return state;
}