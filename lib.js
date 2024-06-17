const myLibrary = [];

 function Book (title,author,pages,read) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;

}
function addBookToLibrary (myLibrary) {
   myLibrary.push (new Book ("The Lord of the Rings", "J.R.R. Tolkien", "696"));
   myLibrary.push (new Book ("Pride and Prejudice", "Jane Austen", "920"));
   myLibrary.push (new Book ("To Kill a Morckingbird", "Haper Lee", "1030"));
   console.log ("Books added to the library !");
}

function displayBooks (myLibrary) {
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML = "";

    for (const book of myLibrary) {
        const bookCard = document.createElement ("div");
        bookCard.classList.add("book-card");
        let bookInfo =`<h3>${book.title}</h3><p>By ${book.author}</p>`;
        bookInfo +=`<p>Pages : ${book.pages}</p>`;
        if (book.read) {
            bookInfo +=`<p>Read</p>`;
        }
        else {
            bookInfo += `<Not Read</p>`;
        }
        bookCard.innerHTML = bookInfo;
        booksContainer.appendChild(bookCard);
    }
}

addBookToLibrary(myLibrary);
displayBooks(myLibrary);

function handleNewBookForm (event) {
      event.preventDefault();
      const titleInput = document.getElementById("newBookTitle");
      const authorInput = document.getElementById("newBookAuthor");
      const pagesInput = document.getElementById("newBookPages");
      const readCheckbox = document.getElementById("newBookRead");

      const newBook = new Book (
        titleInput.value,
        authorInput.value,
        parseInt(pagesInput.value),
        readCheckbox.checked
      );

      myLibrary.push(newBook);
      displayBooks(myLibrary);

      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readCheckbox.checked = false;
}

const newBookForm = document.createElement("form");
newBookForm.id = "newBookForm";
newBookForm.style.display = "none";




