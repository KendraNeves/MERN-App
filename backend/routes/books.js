const router = require('express').Router();
let User = require('../models/book.model');
const Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const image = req.body.image;
  const link = req.body.link;


  const newBook = new Book({
    username,
    title,
    author,
    description,
    image,
    link,
  })

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;