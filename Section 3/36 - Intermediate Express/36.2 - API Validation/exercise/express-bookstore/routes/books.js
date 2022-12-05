const express = require("express");
const Book = require("../models/book");
const jsonSchema = require('jsonschema')
const bookSchemaNew = require('../schemas/bookSchemaNew.json')
const bookSchemaUpdate = require('../schemas/bookSchemaUpdate.json')
const ExpressError = require('../expressError')

const router = new express.Router();


/** GET / => {books: [book, ...]}  */

router.get("/", async function (req, res, next) {
  try {
    const books = await Book.findAll(req.query);
    return res.json({ books });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id]  => {book: book} */

router.get("/:id", async function (req, res, next) {
  try {
    const book = await Book.findOne(req.params.id);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** POST /   bookData => {book: newBook}  */

router.post("/", async function (req, res, next) {
  const result = jsonSchema.validate(req.body, bookSchemaNew);

  if (!result.valid) {
    let listOfErrors = result.errors.map(error => error.stack)
    let error = new ExpressError(listOfErrors, 400)
    return next(error)
  }
  
  const book = await Book.create(req.body);
  return res.status(201).json({ book });
  
});

/** PUT /[isbn]   bookData => {book: updatedBook}  */

router.put("/:isbn", async function (req, res, next) {
  const result = jsonSchema.validate(req.body, bookSchemaUpdate);

  if (!result.valid) {
    let listOfErrors = result.errors.map((error) => error.stack);
    let error = new ExpressError(listOfErrors, 400);
    return next(error);
  }

    const book = await Book.update(req.params.isbn, req.body);
    return res.json({ book });
});

/** DELETE /[isbn]   => {message: "Book deleted"} */

router.delete("/:isbn", async function (req, res, next) {
  try {
    await Book.remove(req.params.isbn);
    return res.json({ message: "Book deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
