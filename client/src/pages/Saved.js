import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Jumbotron from '../components/jumbotron/jumbotron';
import API from '../utils/API';
import SavedResult from '../components/book/savedResults';
import Footer from '../components/footer/footer';

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.getBooks()
        .then(res => {
            this.setState({ results: res.data });
            console.log(this.state.results)
        })
        .catch(err => console.log(err))
    }

    deleteBook = book => {
        API.deleteBook(book)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
            <Navbar />
            <Jumbotron />
            <SavedResult 
            books={this.state.books}
            deleteBook={book => this.deleteBook(book)}
            />
            <Footer />
          </div>
        )
    }
}

export default Saved;