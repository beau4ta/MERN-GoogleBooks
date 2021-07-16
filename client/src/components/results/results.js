import React from 'react';
import './results.css';

const Results = (props) => {
    return(
        <div className='result-container'>
            <div>{props.image}</div>
            <div>{props.title} {props.author} {props.description}</div>
            <div>
                <link className='saveBtn'>+</link> 
                <link className='viewBtn'>View Book</link>
            </div>
        </div>
    )
}