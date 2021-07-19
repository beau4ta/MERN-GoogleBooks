import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Jumbotron from '../components/jumbotron/jumbotron';
import API from '../utils/API';
import SavedResult from '../components/book/savedResults';
import Footer from '../components/footer/footer';

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        API.getBooks()
        .then(res => {
            this.setState({ books: res.data });
            console.log(this.state.books)
        })
        .catch(err => console.log(err))
    }

    deleteBook = id => {
        API.deleteBook(id).then(this.componentDidMount())
        .catch(err => console.log(err.response))
    }

    render() {
        return(
            <div>
            <Navbar />
            <Jumbotron />
            <SavedResult 
            books={this.state.books}
            deleteBook={this.deleteBook}
            />
            <Footer />
          </div>
        )
    }
}

export default Saved;