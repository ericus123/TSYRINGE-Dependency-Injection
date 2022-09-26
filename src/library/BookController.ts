import { Router } from "express";
import BookService from "./BookService";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class BookController {
  bookService: BookService;
  router: Router;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = new Router();
  }

  getBooksRoute() {
    return this.bookService.getBooks();
  }

  routes() {
    this.router.get("/", (_req, res) => {
      res.send(this.getBooksRoute());
    });
    return this.router;
  }
}
