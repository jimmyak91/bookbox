let myLibrary = [
     {
        title: 'Lord of the Rings: Fellowship of the Ring',
        author: 'JRR Tolkien',
        pageCount: 423,
        completed: 'No'
    },
    {
        title: 'Stalins Englishman',
        author: 'Andrew Lownie',
        pageCount: 500,
        completed: 'Yes'
    }
];

function book(title, author, pageCount, completed) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.completed = completed;
}

function addBookToLibrary(title, author, pageCount, completed) {
  // do stuff here
    var newBook = new book(title, author, pageCount, completed);
    myLibrary.push(newBook);
}

function displayLibrary() {
const displayMyLibrary = document.querySelector('.library');
console.log(displayMyLibrary);
    for (i = 0; i < myLibrary.length; i++) {
        var newBook = document.createElement('div');
        newBook.className = 'book'
        newBook.innerHTML = '<h1>' + myLibrary[i].title + '</h1>' + myLibrary[i].author + '<p>' + myLibrary[i].pageCount + '</p>';
        newBook.innerHTML += '<div class="bookButtons"><button>Remove</button><button>Read</button></div>'
        
        displayMyLibrary.appendChild(newBook);
    }

}

// addBookToLibrary('Test', 'James Test', 200, 'Yes');
// addBookToLibrary('Test2', 'James Test', 200, 'Yes');
// addBookToLibrary('Test3', 'James Test', 200, 'Yes');
displayLibrary();
