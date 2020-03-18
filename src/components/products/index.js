import React from "react";
import "./index.scss";

const Products = ({
    product
}) => {
    return (
        <div className="products">
            <div className="image">
                <img src={product.image_url} />
            </div>
            <h2>{product.name}</h2>
            <p>Tagline: {product.tagline}</p>
            <p>First Brewed: {product.first_brewed}</p>
        </div>
    )
}    

export default Products;