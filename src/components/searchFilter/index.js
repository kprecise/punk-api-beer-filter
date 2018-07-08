import React, { Component } from "react";
import "./index.scss";

class SearchFilter extends Component {
    render() {
        const {clickEventHandler, selectedItem} = this.props;
        return (  
            <div id="searchFilter">
                <h2>Sort by</h2>
                <ul>    
                    <li>
                        <input type="radio" id="name" value="name" onChange={clickEventHandler} checked={("name" === selectedItem) ? true : false}/>
                        <label htmlFor="name">Name</label>
                    </li>
                    <li>
                        <input type="radio" id="price" value="price"  onChange={clickEventHandler} checked={("price" === selectedItem) ? true : false}/>
                        <label htmlFor="price">Price</label>
                    </li>
                </ul>            
            </div>
        );
    }
}

export default SearchFilter;