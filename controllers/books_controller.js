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



// Seed
books.get('/seed', (req, res) => {
    Book.insertMany(Seed)
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


// Show Book
books.get('/:id', async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id)
        res.status(200).json(foundBook)
    } catch(err) {
        res.status(404).json(err)
    }
})


// Export
module.exports=books