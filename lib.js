const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render()
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet' );

function render() {
    let libraryBook = document.querySelector('#library');
    libraryBook.innerText = '';
    for (let i = 0; i < myLibrary.length; i ++) {
        let book = myLibrary[i];
        const bookElement = document.createElement('div-dom');
        bookElement.setAttribute('class', 'book-card'); //Do later
        bookElement.innerText = `${book.title} ${book.author} ${book.pages}`
        const toggleReadButton = document.createElement('button');
        toggleReadButton.innerText = `${book.read ? 'Read' : 'Not Read Yet'}`;
        const removeBookButton = document.createElement('button');
        removeBookButton.textContent = 'Remove Book';
        libraryBook.appendChild(bookElement);
        bookElement.appendChild(toggleReadButton);
        bookElement.appendChild(removeBookButton);
        removeBookButton.addEventListener('click', () => {
            removeBook(i)
          });
          toggleReadButton.addEventListener('click', () => {
            toggleRead(i)
          });
      }
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value;
  let author = document.getElementById('author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.getElementById('read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookBtn= document.querySelector('#new-book-button');
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'block';
})

document.querySelector('#new-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})

