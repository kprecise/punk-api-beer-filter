import React from "react";
import "./index.scss";

const SearchFilter  = ({
    onChange, 
    selectedItem
}) => {

    return (
        <div id="searchFilter">
            <h2>Sort by</h2>
            <p>Choose a filter to display either all beers, beers in alphabetical order or only beers available on keg.</p>
            <ul> 
                <li>
                    <input type="radio" id="unordered" value="unordered" onChange={onChange} checked={("unordered" === selectedItem) ? true : false}/>
                    <label htmlFor="unordered">All (unordered)</label>
                </li>                       
                <li>
                    <input type="radio" id="name" value="name" onChange={onChange} checked={("name" === selectedItem) ? true : false}/>
                    <label htmlFor="name">Alphabetical</label>
                </li>
                <li>
                    <input type="radio" id="keg" value="keg" onChange={onChange} checked={("keg" === selectedItem) ? true : false}/>
                    <label htmlFor="keg">Keg only</label>
                </li>
            </ul>            
        </div>
    )

}

export default SearchFilter;