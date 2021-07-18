import React from 'react'
import ListResults from '../results/listResults';
import '../results/listResults.css';

const SearchResult = props => {
    const { saveBook } = props;

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
                             title={book.volumeInfo.title}
                             author={book.volumeInfo.authors}
                             description={book.volumeInfo.description}
                             infoLink={book.volumeInfo.infoLink}
                             image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "No Image Available"}
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