export const addToCart = (id) => {

    return {
        type: "ADD_TO_CART",
        id
    };
};

export const createCart = () => {

    console.log("CREATING CART!!!!")

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