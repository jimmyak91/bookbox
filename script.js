let myLibrary = [
     {
        title: 'Lord of the Rings: Fellowship of the Ring',
        author: 'JRR Tolkien',
        pageCount: 423,
        read: true
    },
    {
        title: 'Stalins Englishman',
        author: 'Andrew Lownie',
        pageCount: 500,
        read: true
    }
];
const bookList = document.querySelector('.library');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const coverInput = document.querySelector('#cover');
const readInput = document.querySelector('#read');
const submitBtn = document.getElementById('submitBtn');

function book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  this.read = read;
  this.id = title.slice(0, 3).toUpperCase() + pages;
}



const addBook = () => {
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    read = readInput.checked;
    id = this.id;
  
    let newBook = new book(title, author, pages, read);
  
    myLibrary.push(newBook);
    updateBooks();
    formReset();
}


submitBtn.addEventListener('click', addBook);



const createBook = (item) => {
    const div = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    const pRead = document.createElement('p');
    const h3 = document.createElement('h3');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p')

    div.className = "book";
    div.setAttribute("id", item.id);

    bookList.appendChild(div);
  
    h3.innerText = item.title;
    pAuthor.innerText = `Author: ${item.author}`;
    pPages.innerText = `Total Pages: ${item.pages}`;
    pRead.innerText = `Read: ${item.read}`;
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
  
    div.appendChild(h3);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(removeBtn);

    readBtn.classList.add('readBtn')
    div.appendChild(readBtn);
    if (item.read === false) {
        readBtn.textContent = 'Not Read';
    } else {
        readBtn.textContent = 'Read';
    }

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        updateBooks();
     });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        updateBooks();
    });
}

const updateBooks = () => {
    const bookList = document.querySelector('.library');
    bookList.querySelectorAll('div').forEach(n => n.remove());
  
    for (let i = 0; i < myLibrary.length; i++) {
      createBook(myLibrary[i]);
    }
  }

const formReset = () => {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
};

// removeBookBtn.forEach((book) => {
//     removeBookBtn.addEventListener('click', deleteBook(book.getAttribute('itemArrayLocation')));
// });

// Get the modal
var modal = document.getElementById("addBookModal");

// Get the button that opens the modal
var addBookBtn = document.getElementById("addBookBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

//submit button to add book
var submitNewBookForm = document.getElementById("submitBtn");




// })

// When the user clicks on the button, open the modal
addBookBtn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


