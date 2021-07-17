import React from 'react';
import './results.css';

const SearchResults = (props) => {

    const { saveBook } = props;

    return(
        <div className='result-container'>
            <h1 className='result-title'>Results:</h1>
            <div className='book-image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='book-info'>
                <h2>{props.title}</h2>
                <h4>{props.author}</h4>
                <p>{props.description}</p>
            </div>
            <div>
                <a href={props.link}><button className='saveBtn'><i class="fas fa-plus"></i></button></a>
                <button className='viewBtn' onClick={() => saveBook(props)}><i class="fas fa-eye"></i></button>
            </div>
        </div>
    )
}

export default SearchResults;