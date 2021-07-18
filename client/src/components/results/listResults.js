import React from 'react';
import './listResults.css';

const ListResults = (props) => {

    const { saveBook } = props;

    return(
        <div className='book-container d-flex'>
            <div className='book-image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='book-info'>
                <h2>{props.title}</h2>
                <h4>{props.author}</h4>
                <p>{props.description}</p>
            </div>
            <div className='button-container'>
                <button className='saveBtn' onClick={() => saveBook(props)}><i className="fas fa-plus"></i></button>
                <a href={props.link}><button className='viewBtn'><i className="fas fa-eye"></i></button></a>
            </div>
        </div>
    )
}

export default ListResults;