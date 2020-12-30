//TODO belongs in actions?
export const loadProducts = () => {
    return(dispatch) => {
        fetch('http://localhost:4000/products')
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                //SHOW_PRODUCTS
                dispatch({ type: 'ADD_PRODUCTS', products: responseJSON })
            })
    }
}