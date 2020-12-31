const productReducers = (
    state = { 
        products: []
    }, action) => {
    switch(action.type) {
        //TODO ADMIN CAN ADD PRODUCTS
        case 'ADD_PRODUCTS': //SHOW_PRODUCTS
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
        }
    }

export default productReducers;
