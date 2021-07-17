import React from 'react';
import './jumbotron.css';

const Jumbotron = () => {
    return(
        <div className="jumbotron d-flex flex-column align-items-center justify-content-center h-100 p-5">
          <h2 className>Google Books Search</h2>
          <p>Search for and Save Books of Interest</p>
        </div>
    )
}

export default Jumbotron;