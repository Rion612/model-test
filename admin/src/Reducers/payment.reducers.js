import { paymentConstants } from "../Actions/constants"

const initialState = {
    payment: [],
    loading: false,
    error: ""
}


const makeUpadted = (payments, data) => {
    const s = payments.filter(x => x._id !== data._id);
    s.push({
        _id: data._id,
        courseId: data.courseId,
        userId: data.userId,
        amount: data.amount,
        status: data.status,
        transactionId: data.transactionId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
    })
    return s;

}
/*
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
*/
export default (state = initialState, action) => {
    switch (action.type) {
        case paymentConstants.GET_PAYMENT_REQUEST:
            state = {
                ...initialState,
                loading: true
            }
            break;
        case paymentConstants.GET_PAYMENT_SUCCESS:
            state = {
                ...state,
                loading: false,
                payment: action.payload.payments
            }
            break;
        case paymentConstants.GET_PAYMENT_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
            /*
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
            break;*/
        case paymentConstants.EDIT_PAYMENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case paymentConstants.EDIT_PAYMENT_SUCCESS:
            const data = action.payload.payment;
            const upgradePayment = makeUpadted(state.payment,data);
            state = {
                ...state,
                loading: false,
                payment: upgradePayment
            }
            break;
        case paymentConstants.EDIT_PAYMENT_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;

    }
    return state;
}