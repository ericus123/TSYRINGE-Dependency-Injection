import express from "express";
import dotenv from "dotenv";
import { rmSync } from "fs";
import BookController from "./library/BookController";
import BookRepository from "./library/BookRepository";
import BookService from "./library/BookService";
dotenv.config();

const app = express();

const port = process.env.PORT;

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

app.listen(port, () => {
  console.log("App is listening on port ", port);
});

app.use("/library", bookController.routes());
