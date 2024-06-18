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

  const cardAuthor = document.createElement("p");
  cardAuthor.textContainer = `Author: ${book.author}`;

  const cardPages = document.createElement("p");
  cardPages.textContent = `Pages : ${book.pages}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  const readBtn  = document.createElement("button");
  readBtn.textContent = book.read ? "Read" : "Not Read";

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(readBtn);
  card.appendChild(removeBtn);

  readBtn.onclick = () => toggleRead(book.bookId);
  removeBtn.onclick = () =>removeBook(book.bookId);

  cardContainer.appendChild(card);
}

function renderLibrary() {
    cardContainer.innerHTML = "";
    myLibrary.forEach(book => addBookToLibrary(book));
}

function clearModalInputs () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

function validateInputs(title,author,pages) {
    if (title==="" ||author ==="" ||pages==="") {
        alert("Please fill out all fields");
        return false;
    }
    return true;
    }

    function removeBook (bookId) {
     myLibrary = myLibrary.filter(book =>book.bookId !== bookId);
     renderLibrary();
    }

   function toggleRead (bookId) {
      const book = myLibrary.find(book =>book.bookId === bookId);
      book.read = !book.read;
      renderLibrary();
   }

   showBtn.addEventListener("click", () => {
    modal.showModal();
   })

   addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    if(!validateInputs(title, author, pages)) {
        return;
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderLibrary();
    clearModalInputs();
    modal.closest();
   })

   const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "281", "true");
   const book2 = new Book("While Passion Sleeps", "Shirleen Buzbee", "698", "true");
   const book3 = new Book("Blossom Street", "Debby Macomber", "500", "true");
   myLibrary.push(book1, book2, book3);

   renderLibrary();



 