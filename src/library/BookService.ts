import BookRepository from "./BookRepository";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class BookService {
  bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  getBooks() {
    return this.bookRepository.getBooks();
  }
}
