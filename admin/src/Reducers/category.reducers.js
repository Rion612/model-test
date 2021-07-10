import { categoryConstants } from "../Actions/constants"

const initial_state = {
    loading: false,
    categories: [],
    error: null

}
const buildNewCategories = (categories, category) => {
    return [
        ...categories,
        {
            _id: category._id,
            name: category.name,
            slug: category.slug,
            categoryImage: category.categoryImage
        }
    ];

}
const buildNewCategories2 = (categories,id) => {
    const c = categories.filter(x => x._id !== id);
    return c;

}

const buildNewCategories3 = (categories,cate) => {
    const c = categories.filter(x => x._id !== cate._id);
    c.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        categoryImage: cate.categoryImage 
    })
    return c;

}
export default (state = initial_state, action) => {
    switch (action.type) {
        case categoryConstants.GET_CATEGORY_REQUEST:
            state = {
                ...initial_state,
                loading: true
            }
            break;
        case categoryConstants.GET_CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.bikeCategory,
                loading: false
            }
            break;
        case categoryConstants.GET_CATEGORY_FAILURE:
            state = {
                ...initial_state,
                loading: false,
                message: action.payload.message
            }
            break;
        case categoryConstants.ADD_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_CATEGORY_SUCCESS:
            const cate = action.payload.Category;
            const updateCategories = buildNewCategories(state.categories, cate);
            state = {
                ...state,
                categories: updateCategories,
                loading: false

            }
            break;
        case categoryConstants.ADD_CATEGORY_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;
        case categoryConstants.DEL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.DEL_CATEGORY_SUCCESS:
            const id = action.payload.id;
            const updateCategories2 = buildNewCategories2(state.categories,id);
            state = {
                ...state,
                categories: updateCategories2,
                loading: false

            }
            break;
        case categoryConstants.DEL_CATEGORY_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;
            case categoryConstants.EDIT_CATEGORY_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case categoryConstants.EDIT_CATEGORY_SUCCESS:
                const bikeCategory = action.payload.Category;
                const updateCategories3 = buildNewCategories3(state.categories,bikeCategory);
                state = {
                    ...state,
                    categories: updateCategories3,
                    loading: false
    
                }
                break;
            case categoryConstants.EDIT_CATEGORY_FAILURE:
                state = {
                    ...state,
                    message: action.payload.message
    
                }
                break;

    }
    return state;

}