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
                        <input type="radio" id="unordered" value="unordered" onChange={clickEventHandler} checked={("unordered" === selectedItem) ? true : false}/>
                        <label htmlFor="unordered">Unordered</label>
                    </li>                       
                    <li>
                        <input type="radio" id="name" value="name" onChange={clickEventHandler} checked={("name" === selectedItem) ? true : false}/>
                        <label htmlFor="name">Name</label>
                    </li>
                    <li>
                        <input type="radio" id="keg" value="keg" onChange={clickEventHandler} checked={("keg" === selectedItem) ? true : false}/>
                        <label htmlFor="keg">Keg</label>
                    </li>
                </ul>            
            </div>
        );
    }
}

export default SearchFilter;