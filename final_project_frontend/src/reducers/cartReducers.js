const cartReducers = (
    state = { 
        cartItems: []
    }, action) => {
        switch (action.type) {
            case "CREATE_CART":

                state.id = action.cart_id
                
                return state

            case "ADD_TO_CART":

                let flagAlreadyInCart = false;
                
                // If item is already in cart
                state.cartItems.forEach((itemInCart) => {
                    if (itemInCart.id === action.id) {
                        flagAlreadyInCart = true
                        itemInCart.count += 1;
                        
                        addProductToDBCart(state.id, action.id, itemInCart.count)
                    }
                });

                // first time in cart & cart created
                if (!flagAlreadyInCart && !!state.id) {
                    
                    addProductToDBCart(state.id, action.id, 1)
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
        
            case "DELETE_CART": 
                console.log("hello")

                return  { 
                    ...state
                };
            
        default:
            return state;
        }
};

export default cartReducers



const addProductToDBCart = (cartId, productId, count) => {
    
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: productId,
            cart_id: cartId,
            count: count
        })
    };

    fetch("http://localhost:4000/carts_products", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
}
