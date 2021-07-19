import React from 'react'
import ListResults from '../results/listResults';
import '../results/listResults.css';

const SearchResult = props => {
    const { saveBook } = props;
    const { deleteBook } = props;


    return (props.books.length === 0) ? (
       
        <div className="result-container">
            <div className="result-title">
                <h3>Search Results:</h3>
            </div>
        </div>
) : (
        
            <div className="result-container">
                <div className="result-title">
                    <h3>Search Results:</h3>
                    {props.books.map(book => {
                        return (
                            <div>
                            <ListResults
                             key={book.id}
                             title={book.title}
                             author={book.author}
                             description={book.description}
                             link={book.link}
                             image={book.image}
                             _id={book._id}
                             saveBook={saveBook}
                             />
                             </div>
                        );
                    })}
                </div>
            </div>
        
    )
}

export default SearchResult;