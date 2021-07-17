import React from 'react';
import './results.css';

const Results = (props) => {
    return(
        <div className='result-container'>
            <h1 className='results-title'>Results:</h1>
            <div>{props.image}</div>
            <div>{props.title} {props.author} {props.description}</div>
            <div>
                <button className='saveBtn'><i class="fas fa-plus"></i></button> 
                <button className='viewBtn'><i class="fas fa-eye"></i></button>
            </div>
        </div>
    )
}

export default Results;