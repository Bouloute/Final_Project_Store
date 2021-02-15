export const addToCart = (id) => {

    return {
        type: "ADD_TO_CART",
        id
    };
};

export const createCart = () => {

    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    
    return(dispatch) => {
        fetch("http://localhost:4000/carts", requestOptions)
            .then(response => response.json())
            .then(result => {
                dispatch({ type: 'CREATE_CART', cart_id: result.id })
            })
            .catch(error => console.log('error', error));

    } 

}

export const findCart = (id) => {  

    return(dispatch) => {
        fetch('http://localhost:4000/carts/' + id)
            .then(response => {
                if( response.ok){ //404 or 500
                    return response.json()
                }
                else {
                    throw new Error(response.status + "No cart with this id exists in the Database")
                }
            }).then(responseJSON => {
                //SHOW_CART_ITEMS
                dispatch({ type: 'SHOW_CART', cartItems: responseJSON })
            })
            .catch(error => {console.log("error", error)});
    }
}

export const deleteCart = (id) => {
    return{
        type: 'DELETE_CART',
        id: id
    }
}

export const removeProductFromCart = (product_id, cart_id) => {
    return{
        type: 'REMOVE_PRODUCT_FROM_CART',
        product_id: product_id,
        cart_id: cart_id
    }
}