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
        results: [],
        title: '',
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value })
    
        API.getSearchBooks(this.state.title)
        .then(res => {
          this.setState({ results: res.data.items })
        })
        .catch(err => console.log(err));
    
      }
    
      render() {
        return (
            <div>
           <Navbar />
           <Jumbotron />
          <SearchForm
           
            />
            <Results />
          </div>
        );
      }
}

export default Search; 