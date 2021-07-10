import { courseConstants } from "../Actions/constants"

const initialState = {
    courses: [],
    error: "",
    loading: false
}
/*
const makeUpdate3 = (brands, bikeBrand) => {

    brands.push({
        _id: bikeBrand._id,
        name: bikeBrand.name,
        slug: bikeBrand.slug,
        description: bikeBrand.description,
        createdAt: bikeBrand.createdAt,
        updatedAt: bikeBrand.updatedAt,
        brandImage: bikeBrand.brandImage
    });
    return brands;

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
        brandImage: b.brandImage
    })
    return br;

}
const makeUpdate2 = (brands, id) => {
    const b = brands.filter(x => x._id !== id);
    return b;

}*/
export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case courseConstants.GET_COURSE_REQUEST:
            state = {
                ...initialState,
                loading: true
            }
            break;
        case courseConstants.GET_COURSE_SUCCESS:
            state = {
                ...state,
                courses: action.payload.courses,
                loading: false
            }
            break;
        case courseConstants.GET_COURSE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.message
            }
            break;
            /*
        case brandConstants.EDIT_BRAND_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case brandConstants.EDIT_BRAND_SUCCESS:
            const b = action.payload.brand;
            const updatebrands = makeUpdate(state.brands, b);
            state = {
                ...state,
                loading: false,
                brands: updatebrands
            }
            break;
        case brandConstants.EDIT_BRAND_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case brandConstants.DEL_BRAND_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case brandConstants.DEL_BRAND_SUCCESS:
            const id = action.payload.id;
            const updatebrands2 = makeUpdate2(state.brands, id);
            state = {
                ...state,
                brands: updatebrands2,
                loading: false

            }
            break;
        case brandConstants.DEL_BRAND_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;
        case brandConstants.ADD_BRAND_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case brandConstants.ADD_BRAND_SUCCESS:
            const bikeBrand = action.payload.bikeBrand;
            const updatebrands3 = makeUpdate3(state.brands, bikeBrand);
            state = {
                ...state,
                brands: updatebrands3,
                loading: false

            }
            break;
        case brandConstants.ADD_BRAND_FAILURE:
            state = {
                ...state,
                error: action.payload.message

            }
            break;*/
        

    }
    return state;

}