import React, { Component } from "react";
import "./index.scss";

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (      
            <div className="products">
                <div className="image">
                    <img src={product.image_url} />
                </div>
                <h2>{product.name}</h2>
                <p>Tagline: {product.tagline}</p>
                <p>First Brewed: {product.first_brewed}</p>
            </div>
        );
    }
}

export default Products;