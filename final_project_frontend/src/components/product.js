import React, { Component } from 'react';

class product extends Component {
    render() {
        return (
            <div class="product">
                <div class="info-large">
                    <h4>{this.props.product.title}</h4>
                    <div class="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>
                    
                    <div class="price-big">
                        <span>${this.props.product.price}</span> ${this.props.product.price}
                    </div>
                    
                    

                    <h3>SIZE</h3>
                    <div class="sizes-large">
                        <span>200ml</span>
                        <span>375ml</span>
                    </div>
                    
                    <button class="add-cart-large">Add To Cart</button>                          
                                
                </div>
                <div class="make3D">
                <div class="product-front">
                    <div class="shadow"></div>
                    <img src={this.props.product.image} alt="" />
                    <div class="image_overlay"></div>
                    <div class="add_to_cart">Add to cart</div>
                    <div class="view_gallery">View details</div>
                    <div class="stats">        	
                        <div class="stats-container">
                            <span class="product_price">${this.props.product.price}</span>
                            <span class="product_name">{this.props.product.title}</span>    
                            <p>{this.props.product.category}</p>                                            
                            
                            <div class="product-options">
                            <strong>SIZES</strong>
                            <span>200ml, 375ml</span>
                        </div>                       
                        </div>                         
                    </div>
                </div>
                
                <div class="product-back">
                    <div class="shadow"></div>
                    <p>details</p>
                </div>	  
            </div>	
        </div>
        )
    }
}

export default product;