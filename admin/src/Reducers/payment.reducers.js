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
const makeUpadted2 = (payments, id) => {
    const p = payments.filter(x => x._id !== id);
    return p;

}

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
        case paymentConstants.DEL_PAYMENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case paymentConstants.DEL_PAYMENT_SUCCESS:
            const id = action.payload.id;
            const upgradePayment2 = makeUpadted2(state.payment, id);
            state = {
                ...state,
                payment: upgradePayment2,
                loading: false

            }
            break;
        case paymentConstants.DEL_PAYMENT_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;
        case paymentConstants.EDIT_PAYMENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case paymentConstants.EDIT_PAYMENT_SUCCESS:
            const data = action.payload.payment;
            const upgradePayment = makeUpadted(state.payment, data);
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