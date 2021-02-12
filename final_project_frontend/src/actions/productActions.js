export const loadProducts = (params) => {
    let url = 'http://localhost:4000/products'
    
    if (params.query){
        url += "?cat=" + params.query 
    }

    return(dispatch) => {
        fetch(url)
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                //SHOW_PRODUCTS
                dispatch({ type: 'ADD_PRODUCTS', products: responseJSON })
            })
    }
}