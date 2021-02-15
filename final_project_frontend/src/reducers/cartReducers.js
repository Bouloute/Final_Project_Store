//import { deleteCart } from "../actions/cartActions";

const cartReducers = (
    state = { 
        cartItems: []
    }, action) => {
        switch (action.type) {
            case "CREATE_CART"://Put in session
            //TODO pick a case
                state.cartId = action.cart_id
                
                return state

            case "SHOW_CART":
                return {
                    ...state,
                    cartItems: action.cartItems
                }
            case "ADD_TO_CART":

                let flagAlreadyInCart = false;
                
                // If item is already in cart
                state.cartItems.forEach((itemInCart) => {
                    if (itemInCart.cartId === action.id) {
                        flagAlreadyInCart = true
                        itemInCart.count += 1;
                        
                        addProductToDBCart(state.cartId, action.id, itemInCart.count)
                    }
                });

                // first time in cart & cart created
                if (!flagAlreadyInCart && !!state.cartId) {
                    addProductToDBCart(state.cartId, action.id, 1)
                    
                    return { 
                        ...state,
                        cartItems: [
                            ...state.cartItems,
                            {
                                cartId: action.id,
                                count: 1
                            }
                        ] 
                    }
                }

                return { 
                    ...state
                };
        
            case "DELETE_CART": 
            //TODO Action.id?? session cart id??
                deleteCart(state.cartId)
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
            //TODO JS-> empty cart + message + redirect?
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