import { userConstants } from '../Actions/constants'

const initialState = {
    message: "",
    loading: false,
    authenticate: false,
    authenticating: false,
    token: null,
    error: false,
    user: {
        _id: "",
        fullname: "",
        email: "",
        contact: "",
        userImage: "",
        institutionName: "",
        gender: ""
    }
}

const makeUpdate = (stateUser, updateUser) => {
    stateUser._id = updateUser._id;
    stateUser.fullname = updateUser.fullname;
    stateUser.email = updateUser.email;
    stateUser.contact = updateUser.contact;
    stateUser.userImage = updateUser.userImage;
    stateUser.institutionName = updateUser.institutionName;
    stateUser.gender = updateUser.gender;



    return stateUser;    

}
export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case userConstants.USER_LOGIN_REQUEST:
            state = {
                ...state,
                loading: true,
                authenticating: true
            }
            break;
        case userConstants.USER_LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
                authenticate: true,
                authenticating: false
            }
            break;
        case userConstants.USER_LOGIN_FAILURE:
            state = {
                ...state,
                loading: false,
                authenticating: false,
                message: action.payload.message,
                error: true
            }
            break;
        case userConstants.USER_LOGOUT_REQUEST:
            state = {
                ...state
            }
            break;
        case userConstants.USER_LOGOUT_SUCCESS:
            state = initialState
            break;
        case userConstants.PROFILE_UPDATE_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case userConstants.PROFILE_UPDATE_SUCCESS:
            const updateUser = action.payload.user;
            state={
                ...state,
                loading :false,
                user : makeUpdate(state.user, updateUser)

            }
            break;
        case userConstants.PROFILE_UPDATE_FAILURE:
            state={
                ...state,
            }
            break;

    }
    return state;
}