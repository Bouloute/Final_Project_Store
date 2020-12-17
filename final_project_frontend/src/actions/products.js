/*
export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PRODUCTS'})
        fetch('http://127.0.0.1:3200/products').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_PRODUCT', products: responseJSON })
        })
    }
}
*/

export const loadProducts = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_PRODUCTS'})
        fetch('http://localhost:4000/products')//'https://fakestoreapi.com/products')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log("Data")
            console.log(responseJSON)
            dispatch({ type: 'ADD_PRODUCTS', products: responseJSON })
        })
    }
}