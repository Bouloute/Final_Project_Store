const cartReducer = (
    state = { 
        cartItems: []
    }, action) => {
        switch (action.type) {
            case "CREATE_CART":

                state.id = action.cart_id
                
                return state

            case "ADD_TO_CART":

                console.log("Cart number: " + state.id)

                let flagAlreadyInCart = false;
                
                // If item is already in cart
                state.cartItems.forEach((itemInCart) => {
                    if (itemInCart.id === action.id) {
                        flagAlreadyInCart = true
                        itemInCart.count += 1;

                        console.log("Item is already in cart, finding db link and add 1 to count")
                        addProductToDBCart(state.id, action.id, itemInCart.count)
                    }
                });

                // first time in cart & cart created
                if (!flagAlreadyInCart && !!state.id) {
                    console.log("Item isnt in cart, adding to cart with count 0")
                    addProductToDBCart(state.id, action.id, 0)
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



const addProductToDBCart = (cartId, productId, count) => {
    
    //if (!cartId) return false


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