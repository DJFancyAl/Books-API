const express = require('express')
const books = express.Router()
const Book = require('../models/books')
const Seed = require('../models/seed')


// Routes
// Index
books.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.find()
        res.status(200).json(foundBooks)
    } catch(err) {
        res.status(404).json(err)
    }
})


// Export
module.exports=books