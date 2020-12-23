const cartReducer = (
    state = { 
        cartItems: []
    }, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                let flagAlreadyInCart = false;
                
                state.cartItems.forEach((itemInCart) => {
                    if (itemInCart.id === action.id) {
                        flagAlreadyInCart = true
                        itemInCart.count += 1;
                    }
                });

                if (!flagAlreadyInCart) {
                    return { 
                        ...state,
                        cartItems: [
                            ...state.cartItems,
                            {
                                id: action.id,
                                count: 1
                            }
                        ] 
                    }
                }

                return { 
                    ...state
                };
        default:
            return state;
        }
};

export default cartReducer