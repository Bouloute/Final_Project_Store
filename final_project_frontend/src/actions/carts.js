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
        console.log("CREATING CART!!!!")
        fetch("http://localhost:4000/carts", requestOptions)
            .then(response => response.json())
            .then(result => {
                //Change url of navbar to /carts/result.id ??
                dispatch({ type: 'CREATE_CART', cart_id: result.id })
            })
            .catch(error => console.log('error', error));

    } 

}

export const findCart = (id) => {  
    console.log("finding cart " + id)
    return(dispatch) => {
        console.log("sending request")
        fetch('http://localhost:4000/carts/' + id )
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                //debugger
                //SHOW_PRODUCTS
                dispatch({ type: 'ADD_PRODUCTS', products: responseJSON })
            })
            .catch(error => console.log('error', error));
    }
}