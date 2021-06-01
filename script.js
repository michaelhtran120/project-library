let myLibrary = [
    {
        'title': 'The Hobbit',
        'author': 'J.R.R Tolkein',
        'pages': '100 pgs',
        'read': true,
        // 'index': myLibrary.indexOf(this),
    },
    {
        'title': 'HP Sorcerer Stone',
        'author': 'J.K. Rowling',
        'pages': '200 pgs',
        'read': false,
        // 'index': myLibrary.indexOf(this)
    }
];


// Establishing 'Add Book' Button Variable
let bookBtn = document.getElementById('add-book-btn');

// Event Listener for 'Add Book'
bookBtn.addEventListener('click', addBook);

let title = document.getElementById('book-title');
let author = document.getElementById('author-name');
let pages = document.getElementById('book-pages');
let read = document.getElementById('read-book');

function addBook(ev) {
    ev.preventDefault();

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = `${pages} pgs`;
        this.readStatus = read;
        this.index = myLibrary.length;
        // this.info = function() {
        //     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
        // }
    }


    book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book)
    document.querySelector('form').reset();
    displayBook();
}

function displayBook() {
    let tableBooks = document.getElementById('table-books');
    tableBooks.innerHTML = `<tr>
                                <th>Book Title</th>
                                <th>Author</th>
                                <th>Pages</th>
                                <th>Read?</th>
                                <th>Delete?<th>
                            </tr>`

    for (let i = 0; i < myLibrary.length; i++) {
        let newTableRow = document.createElement('tr');
        newTableRow.innerHTML = `<td> ${myLibrary[i]['title']} </td>`;
        newTableRow.innerHTML += `<td> ${myLibrary[i]['author']} </td>`;
        newTableRow.innerHTML += `<td> ${myLibrary[i]['pages']} </td>`;
        if (myLibrary[i]['read'] === true) {
            newTableRow.innerHTML += `<td><input type='checkbox' class='checkbox' value='${i}'checked></td>`;
        } else {
            newTableRow.innerHTML += `<td><input type='checkbox' class='checkbox' value='${i}'></td>`
        }
        newTableRow.innerHTML += `<td><button class='delete-btn' onclick='deleteBook(${i})'>Delete Book</button></td>`
        tableBooks.appendChild(newTableRow);
    }
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (myLibrary[`${i}`]["read"] === true) {
                myLibrary[this.value]['read'] = false;
            } else {
                myLibrary[this.value]['read'] = true;
            }
        })
    })
}
displayBook();

function deleteBook(id) {
    myLibrary.splice(id, 1)
    displayBook();
}

// document.querySelectorAll('.checkbox').forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//         if (myLibrary[this.value]["read"] === true) {
//             myLibrary[this.value]['read'] = false;
//         } else {
//             myLibrary[this.value]['read'] = true;
//         }
//     })
// })

// let checkbox = document.querySelectorAll('.checkbox');

// for (let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener('change', () => {
//         if (myLibrary[this.value]['read'] == true) {
//             myLibrary[this.value]['read'] = false;
//         } else {
//             myLibrary[this.value]['read'] = true;
//         }
//     })
// }