import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Jumbotron from '../components/jumbotron/jumbotron';
import SearchForm from '../components/searchForm/searchForm';
import Results from '../components/results/results';
import API from '../utils/API';

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
          API.getSearchBooks()
          .then(res => {
              console.log(res)
              this.setState({ books: [...res.data.items ]})
          })
          .catch(err => console.log(err));
      };
    
      render() {
        return (
            <div>
            <Navbar />
            <Jumbotron />
            <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <Results />
          </div>
        );
      }
}

export default Search; 