import { paymentConstants } from '../Actions/constants';

const initialState = {
    message :"",
    error :null,
    loading : false,
    payments : []
}


export default (state= initialState,action)=>{
    switch(action.type){
        case paymentConstants.GET_PAYMENT_DETAILS_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case paymentConstants.GET_PAYMENT_DETAILS_SUCCESS:
            state = {
                ...state,
                loading: false,
                payments : action.payload.details
            }
            break;
        case paymentConstants.GET_PAYMENT_DETAILS_FAILURE:
            state = {
                ...state,
                error: true,
                message: action.payload.message,
            }
            break;
    }
    return state;
}