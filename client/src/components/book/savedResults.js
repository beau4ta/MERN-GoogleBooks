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
                             title={book.title}
                             author={book.author}
                             description={book.description}
                             infoLink={book.infoLink}
                             imageLinks={book.imageLinks ? book.imageLinks.medium : "No Image Available"}
                             _id={book._id}
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