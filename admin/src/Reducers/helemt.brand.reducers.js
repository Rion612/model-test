import { helemtbrandConstants } from '../Actions/constants'

const initialState = {
    error: "",
    loading: false,
    helmetBrands: []
}
const makeUpdate = (brands, b) => {
    const br = brands.filter(x => x._id !== b._id);
    br.push({
        _id: b._id,
        name: b.name,
        slug: b.slug,
        description: b.description,
        createdAt: b.createdAt,
        updatedAt: b.updatedAt,
        hbrandImage: b.hbrandImage
    })
    return br;

}
const makeUpdate2 = (brands, id) => {
    const b = brands.filter(x => x._id !== id);
    return b;

}
const makeUpdate3 = (brands, helmetbrand) => {

    brands.push({
        _id: helmetbrand._id,
        name: helmetbrand.name,
        slug: helmetbrand.slug,
        description: helmetbrand.description,
        createdAt: helmetbrand.createdAt,
        updatedAt: helmetbrand.updatedAt,
        hbrandImage: helmetbrand.hbrandImage
    });
    return brands;

}

export default (state = initialState, action) => {
    switch (action.type) {
        case helemtbrandConstants.GET_HELMET_BRAND_REQUEST:
            state = {
                ...initialState,
                loading: true
            }
            break;
        case helemtbrandConstants.GET_HELMET_BRAND_SUCCESS:
            state = {
                ...state,
                helmetBrands: action.payload.helmetBrand,
                loading: false
            }
            break;
        case helemtbrandConstants.GET_HELMET_BRAND_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case helemtbrandConstants.EDIT_HELMET_BRAND_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case helemtbrandConstants.EDIT_HELMET_BRAND_SUCCESS:
            const b = action.payload.helmetBrand;
            const updatebrands = makeUpdate(state.helmetBrands, b);
            state = {
                ...state,
                loading: false,
                helmetBrands: updatebrands
            }
            break;
        case helemtbrandConstants.EDIT_HELMET_BRAND_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case helemtbrandConstants.DEL_HELMET_BRAND_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case helemtbrandConstants.DEL_HELMET_BRAND_SUCCESS:
            const id = action.payload.id;
            const updatebrands2 = makeUpdate2(state.helmetBrands, id);
            state = {
                ...state,
                helmetBrands: updatebrands2,
                loading: false

            }
            break;
        case helemtbrandConstants.DEL_HELMET_BRAND_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;
        case helemtbrandConstants.ADD_HELMET_BRAND_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case helemtbrandConstants.ADD_HELMET_BRAND_SUCCESS:
            const helmetBrand = action.payload.helmetbrands;
            const updatebrands3 = makeUpdate3(state.helmetBrands, helmetBrand);
            state = {
                ...state,
                helmetBrands: updatebrands3,
                loading: false

            }
            break;
        case helemtbrandConstants.ADD_HELMET_BRAND_FAILURE:
            state = {
                ...state,
                error: action.payload.message

            }
            break;
    }
    return state;
}