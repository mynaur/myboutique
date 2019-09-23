import React, { Component } from 'react';
import '../../../style/SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="search-box">
                <p>Search Product</p>
                <form className="search">
                    <input type="text" className="search-txt" placeholder="" name="search"/>
                    <input type="submit" name="" value=""/>
                </form>
            </div>
        );
    }
}

export default SearchBar;