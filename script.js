let myLibrary = [];

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

    if (title === "" || author === "" || pages === "") {
      return;
    }
  
    let newBook = new book(title, author, pages, read);
  
    myLibrary.push(newBook);
    noBooksAdded();
    updateBooks();
    formReset();
    saveLibraryToLocalStorage(myLibrary);
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
    const btnDiv = document.createElement('div');

    div.className = "book";
    div.setAttribute("id", item.id);

    bookList.appendChild(div);
  
    h3.innerText = item.title;
    pAuthor.innerHTML = `<b>Author</b>: ${item.author}`;
    pPages.innerHTML = `<b>Total Pages</b>: ${item.pages}`;
    pRead.innerText = `Read: ${item.read}`;
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    btnDiv.className = 'btnDiv';
  
    div.appendChild(h3);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(btnDiv);
    btnDiv.appendChild(removeBtn);

    readBtn.classList.add('readBtn')
    btnDiv.appendChild(readBtn);
    if (item.read === false) {
        readBtn.textContent = 'Not Read';
        readBtn.classList.add('notRead')
    } else {
        readBtn.textContent = 'Read';
    }

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        noBooksAdded();
        updateBooks();
        saveLibraryToLocalStorage(myLibrary);
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

const saveLibraryToLocalStorage = (item) => {
  window.localStorage.setItem('library', JSON.stringify(item));
}


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


// const github = document.querySelector('.github');
// console.log(github);
// github.addEventListener('onmouseover', () => {
//   github.src = 'GitHub-Mark-32px.png';
// })

function hover(element) {
  element.setAttribute('src', 'GitHub-Mark-32px.png');
}

function unhover(element) {
  element.setAttribute('src', 'GitHub-Mark-Light-32px.png');
}

const noBooksAdded = () => {
  const noBooksDiv = document.querySelector('.no-books');
  if (myLibrary.length === 0) {
    noBooksDiv.style.display = 'flex';
  } else {
    noBooksDiv.style.display = 'none';
  }
};


window.onload = function() {

  myLibrary = JSON.parse(localStorage.library);
  if (myLibrary === null) {
    myLibrary = [];
  }
  else {
    noBooksAdded();
    updateBooks();
  }
  updateBooks();
}


