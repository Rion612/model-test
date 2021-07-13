import { userConstants } from "../Actions/constants"

const initState={
    error :"",
    loading : false,
    users :[]
}
const makeDelete = (users, id) => {
    const u = users.filter(x => x._id !== id);
    return u;

}


export default (state = initState,action)=>{
    switch(action.type){
        case userConstants.GET_ALL_USER_REQUEST:
            state={
                ...initState,
                loading:true
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
            case userConstants.DEL_USER_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case userConstants.DEL_USER_SUCCESS:
                const id = action.payload.id;
                const upgradeUser = makeDelete(state.users, id);
                state = {
                    ...state,
                    users: upgradeUser,
                    loading: false
    
                }
                break;
            case userConstants.DEL_USER_FAILURE:
                state = {
                    ...state,
                    message: action.payload.message
    
                }
                break;
    }
    return state;

}