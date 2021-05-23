let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} pages`;
    this.read = read;
    // this.info = function() {
    //     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function addBookToLibrary() {

}

let title = documentGetElementById('book-title');
let author = documentGetElementById('author-name');
let pages = documentGetElementById('book-pages');
let readBook = documentGetElementById('read-book');