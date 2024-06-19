let myLibrary = [];
const booksDisplay = document.querySelector(".books");

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        return `${title} by ${author}, is ${pages} pages, ${isRead ? "has been read" : "has not yet been read"}`;
    }
}

Book.prototype.toggleReadStatus = function() {
    console.log("hi");
    this.isRead = !this.isRead;
}

function addNewBookToLibrary(title, author, pages, isRead){
    let newBook = new Book(title, author, pages, isRead);
    newBook.index = myLibrary.length;
    myLibrary.push(newBook);
    
}

function displayLibrary() {
    clearDisplayLibrary();

    myLibrary.forEach(book => {
        displayBook(book);
    });
}

function clearDisplayLibrary() {
    booksDisplay.textContent = "";
}

function removeBook(book) {
    let i = 0;
    while((book = book.previousSibling) != null){
        i++
    }
    myLibrary.splice(i, 1);
}

function displayBook(book){
    // Create book card
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    const removeBtn = document.createElement("button");
    const toggleReadStatusBtn = document.createElement("button");

    bookCard.classList.add("card");
    removeBtn.classList.add("remove-btn");
    toggleReadStatusBtn.classList.add("read-status-btn");

    // Update textContent of elements
    title.textContent = `title: ${book.title}`;
    author.textContent = "author: " + book.author;
    pages.textContent = "pages: " + book.pages;
    isRead.textContent = book.isRead ? "Read" : "Has not yet been read";

    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", () => {
        removeBook(bookCard);
        displayLibrary();
        
    })

    toggleReadStatusBtn.textContent = "Change Read Status";
    toggleReadStatusBtn.addEventListener("click", () => {
        book.toggleReadStatus();
        displayLibrary();

    })

    // Add the card onto books display
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.append(pages);
    bookCard.append(isRead);
    bookCard.appendChild(removeBtn);
    bookCard.appendChild(toggleReadStatusBtn);

    booksDisplay.appendChild(bookCard);

  
}

function openAddNewBookForm(){
    document.querySelector(".new-book-form-popup").style.display = "block";
}

function closeAddNewBookForm(){
    document.querySelector(".new-book-form-popup").style.display = "none";
}

// Open and close the form
const newBookButton = document.getElementById("new-book-button");
newBookButton.addEventListener("click", openAddNewBookForm);
const closeFormButton = document.querySelector(".btn-close");
closeFormButton.addEventListener("click", closeAddNewBookForm);

// Add new book from form and add to display
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#is-read")
const addBookButton = document.querySelector(".btn-add");   
addBookButton.addEventListener("click", (event) => {
    event.preventDefault();

    addNewBookToLibrary(titleInput.value, authorInput.value, 
        pagesInput.value, isReadInput.value);
    displayLibrary();
    closeAddNewBookForm();
})


displayLibrary();