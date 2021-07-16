import React from 'react';
import './search.css'

const Search = () => {
    return(
        <div className='background'>
        <div className='search-container d-flex flex-column align-items-center justify-content-center'>
            <h3 className='search-title'>Book Search</h3>
            <input className='search-bar col-6' type='text' placeholder='Search...'></input>
        </div>
        </div>
    )
}

export default Search;