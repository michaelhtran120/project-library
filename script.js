"use strict";

let myLibrary = [
  {
    title: "Sample: The Hobbit",
    author: "J.R.R Tolkein",
    pages: "100 pgs",
    readStatus: true,
    // 'index': myLibrary.indexOf(this),
  },
  {
    title: "Sample: HP Sorcerer Stone",
    author: "J.K. Rowling",
    pages: "200 pgs",
    readStatus: false,
    // 'index': myLibrary.indexOf(this)
  },
];

// Establishing 'Add Book' Button Variable
let bookBtn = document.getElementById("add-book-list-btn");
let titleInput = document.getElementById("book-title");
let authorInput = document.getElementById("author-name");
let pagesInput = document.getElementById("book-pages");
let readInput = document.getElementById("read-book");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = `${pages} pgs`;
  this.readStatus = read;
  this.index = myLibrary.length;
}

function addBook(e) {
  e.preventDefault();

  myLibrary.push(
    new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    )
  );
  document.querySelector("form").reset();
  displayBook();
}

// // Event Listener for 'Add Book'
bookBtn.addEventListener("click", (e) => {
  if (!titleInput.value || !authorInput.value) {
  } else {
    addBook(e);
  }
});
const modalBg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  modalBg.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  modalBg.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

function displayBook() {
  const tableBooks = document.querySelector("#table-books");
  tableBooks.innerHTML = "";
  tableBooks.insertAdjacentHTML(
    "afterbegin",
    `<tr>
      <th>Book Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Read?</th>
      <th>Delete?</th>
      <th></th>
    </tr>`
  );
  for (let i = 0; i < myLibrary.length; i++) {
    let newTableRow = document.createElement("tr");
    newTableRow.innerHTML = `<td> ${myLibrary[i]["title"]} </td>`;
    newTableRow.innerHTML += `<td> ${myLibrary[i]["author"]} </td>`;
    newTableRow.innerHTML += `<td> ${myLibrary[i]["pages"]} </td>`;
    if (myLibrary[i]["readStatus"] === true) {
      newTableRow.innerHTML += `<td><input type='checkbox' class='checkbox' name='checkbox'  value='${i}'checked></td>`;
    } else {
      newTableRow.innerHTML += `<td><input type='checkbox' class='checkbox' name='checkbox' value='${i}'></td>`;
    }
    newTableRow.innerHTML += `<td><button class='delete-btn' onclick='deleteBook(${i})'>Delete Book</button></td>`;
    tableBooks.appendChild(newTableRow);
  }

  const checkboxes = document.querySelectorAll("input[name=checkbox]");

  checkboxes.forEach((cb) =>
    cb.addEventListener("change", function () {
      if (myLibrary[this.value]["readStatus"] === true) {
        console.log("unchecked");
        myLibrary[this.value]["readStatus"] = false;
      } else {
        console.log("checked");
        myLibrary[this.value]["readStatus"] = true;
      }
    })
  );
}

displayBook();

function deleteBook(id) {
  myLibrary.splice(id, 1);
  displayBook();
}
