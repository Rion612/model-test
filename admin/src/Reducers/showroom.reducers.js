import { showroomConstants } from "../Actions/constants"

const initialState = {
    showrooms: [],
    loading: false,
    error: ""
}
const makeUpadted = (showrooms, showroom) => {
    showrooms.push({
        _id: showroom._id,
        name: showroom.name,
        address: showroom.address,
        district: showroom.district,
        thana: showroom.thana,
        cellNo: showroom.cellNo,
        createdAt: showroom.createdAt,
        updatedAt: showroom.updatedAt,
        brand: showroom.brand
    });
    return showrooms;
}
const makeUpadted2 = (showrooms, id) => {
    const s = showrooms.filter(x => x._id !== id);
    return s;

}
const makeUpadted3 = (showrooms, showroom) => {
    const s = showrooms.filter(x => x._id !== showroom._id);
    s.push({
        _id: showroom._id,
        name: showroom.name,
        address: showroom.address,
        district: showroom.district,
        thana: showroom.thana,
        cellNo: showroom.cellNo,
        createdAt: showroom.createdAt,
        updatedAt: showroom.updatedAt,
        brand: showroom.brand
    })
    return s;

}

export default (state = initialState, action) => {
    switch (action.type) {
        case showroomConstants.GET_SHOWROOM_REQUEST:
            state = {
                ...initialState,
                loading: true
            }
            break;
        case showroomConstants.GET_SHOWROOM_SUCCESS:
            state = {
                ...state,
                loading: false,
                showrooms: action.payload.showrooms
            }
            break;
        case showroomConstants.GET_SHOWROOM_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case showroomConstants.ADD_SHOWROOM_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case showroomConstants.ADD_SHOWROOM_SUCCESS:
            const currentShowroom = action.payload.showrooms;
            console.log(currentShowroom);
            const upgradeShowroom = makeUpadted(state.showrooms, currentShowroom);
            console.log(upgradeShowroom);
            state = {
                ...state,
                loading: false,
                showrooms: upgradeShowroom
            }
            break;
        case showroomConstants.ADD_SHOWROOM_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case showroomConstants.DEL_SHOWROOM_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case showroomConstants.DEL_SHOWROOM_SUCCESS:
            const id = action.payload.id;
            const upgradeShowroom2 = makeUpadted2(state.showrooms, id);
            state = {
                ...state,
                showrooms: upgradeShowroom2,
                loading: false

            }
            break;
        case showroomConstants.DEL_SHOWROOM_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;
        case showroomConstants.EDIT_SHOWROOM_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case showroomConstants.EDIT_SHOWROOM_SUCCESS:
            const showroom = action.payload.showroom;
            const upgradeShowroom3 = makeUpadted3(state.showrooms,showroom);
            state = {
                ...state,
                loading: false,
                showrooms: upgradeShowroom3
            }
            break;
        case showroomConstants.EDIT_SHOWROOM_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;

    }
    return state;
}