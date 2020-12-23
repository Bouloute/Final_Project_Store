const ProductsReducer = (
    state = { 
        products: [],
        loading: false 
    }, action) => {
    switch(action.type) {
        case 'LOADING_PRODUCTS':
            return {
            ...state,
            products: [...state.products],
            loading: true
            }
        case 'ADD_PRODUCTS':
            return {
            ...state,
            products: action.products,
            loading: false
            }
        default:
            return state;
        }
    }

export default ProductsReducer;
