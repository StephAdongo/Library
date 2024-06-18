const myLibrary = [];
const cardContainer = document.querySelector(".card-container");
const showBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const addBtn = document.getElementById("new-book");

Book.id = 0;

function Book (title, author, pages, read) {
    this.bookId = `book${++Book.id}`;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = `Title: ${book.title}`;

  
}

 