import React from "react";
import '../results/listResults.css'
import ListResults from '../results/listResults';

const SavedResult = props => {
    const { saveBook } = props;
    const { deleteBook } = props;
    
    return (props.books.length === 0) ? (

            <div className="result-container">
                <div className="result-title">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
    ) : (

                <div className="result-container">
                    <div className="result-title">
                        <h3>Books that You Saved</h3>
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
                             deleteBook={deleteBook}
                             />
                             </div>
                            );
                        })}
                    </div>
                </div>
        )
}
export default SavedResult