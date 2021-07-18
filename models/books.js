const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: { type: String }},
    author: { type: { type: String }},
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;