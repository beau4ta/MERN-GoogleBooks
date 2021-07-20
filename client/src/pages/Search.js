import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Jumbotron from '../components/jumbotron/jumbotron';
import SearchForm from '../components/searchForm/searchForm';
import API from '../utils/API';
import SearchResult from '../components/book/searchResults';
import Footer from '../components/footer/footer';

class Search extends Component {
    state = {
        search: '',
        books: [],
        error: '',
        message: ''
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value })
      }

      handleFormSubmit = event => {
          event.preventDefault();
          API.getSearchBooks(this.state.search)
          .then(res => {
              console.log(res, res.data.items[0].volumeInfo.title, res.data.items[0].volumeInfo.authors)
              this.setState({ books: [...res.data.items ]})
          })
          .catch(err => console.log(err));
      };

      saveBook = book => {
        API.saveBook({
          title: book.title,
          authors: book.authors,
          description: book.description,
          image: book.image,
          link: book.link
        })
        .then(res => console.log("Book Saved!", res))
        .catch(err => console.log(err.response, book.authors, book.infoLinks))
      }
    
      render() {
        return (
            <div>
            <Navbar />
            <Jumbotron />
            <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <SearchResult 
            books={this.state.books}
            saveBook={book => this.saveBook(book)}
            />
            <Footer />
          </div>
        );
      }
}

export default Search; 