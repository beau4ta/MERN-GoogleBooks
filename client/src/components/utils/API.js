import axios from 'axios';

export default {
    //get book from search
    getSearchBooks: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    }
}