import React, { Component } from "react";
import "./index.scss";

class Products extends Component {
    render() {
        const {product} = this.props;
        const convertedPrice = (product.price_in_cents/100).toFixed(2);
        return (      
            <div className="products">
                {product.has_limited_time_offer ? (
                    <div className="limited">Limited Offer</div>
                ) : (
                    <div></div>
                )}
                <img src={product.image_url} />
                    <h2>{product.name}</h2>
                    <p>Price: ${convertedPrice} (for {product.total_package_units})</p>
                    <p>Category: {product.tertiary_category}</p>
                    <p>Serving Suggestion: {product.serving_suggestion}</p>
            </div>
        );
    }
}

export default Products;