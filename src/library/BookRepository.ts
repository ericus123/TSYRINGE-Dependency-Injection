export default class BookRepository {
  books = [
    { id: 1, name: "Fundamentals of Javascript" },
    { id: 2, name: "Eloquent Javasctipt" },
  ];
  getBooks() {
    return this.books;
  }
}
