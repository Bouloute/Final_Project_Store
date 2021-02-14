//import { deleteCart } from "../actions/cartActions";

const cartReducers = (
    state = { 
        cartItems: []
    }, action) => {
        switch (action.type) {
            case "CREATE_CART":
                state.id = action.cart_id
                
                return state

            case "SHOW_CART":
                //debugger
                return {
                    ...state,
                    cartItems: action.products
                }
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
                                //TODO should not look like this
                                id: action.id,
                                count: 1
                            }
                        ] 
                    }
                }


                return { 
                    //TODO double check state format
                    ...state
                };
        
            case "DELETE_CART": 
            //TODO Action.id??
                deleteCart(state.id)
                return  { 
                    ...state
                };
            
            case "REMOVE_PRODUCT_FROM_CART":
                removeProductFromCart(action.product_id, action.cart_id)
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
        .catch(error => console.log('error', error));
}

const deleteCart = (id) => {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    //debugger
    console.log("http://localhost:4000/carts/" + id)
    const url = "http://localhost:4000/carts/" + id

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            //dispatch({ type: 'DELETE_CART', cart_id: id })
            console.log("deleted")
        })
        .catch(error => console.log('error', error));

    
}

const removeProductFromCart = (productId, cartId) => {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    
    fetch("http://localhost:4000/carts_products/" + cartId + "/" + productId, requestOptions)
        .then(response => {
            response.json()
        })
        .catch(error => console.log('error', error));

}