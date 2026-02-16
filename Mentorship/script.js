const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputCategory = document.getElementById("category");

const addButton = document.getElementById("addButton");
const filterButton = document.getElementById("filterButton");

const bookList = document.getElementById("bookList");
const filterCategory = document.getElementById("filterCategory");

class Book {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, category) {
    const book = new Book(title, author, category);
    this.books.push(book);
    this.displayBooks(this.books);
  }

  filterBooks(category) {
    const selectedCategory = category.toLowerCase();

    const filtered = this.books.filter((book) =>
      book.category.toLowerCase().includes(selectedCategory),
    );

    this.displayBooks(filtered);
  }

  displayBooks(booksArray) {
    bookList.innerHTML = "";

    booksArray.forEach((book) => {
      const bookContainer = document.createElement("div");
      bookContainer.classList.add("col");

      const bookCard = document.createElement("div");
      bookCard.classList.add("card", "card-body", "mb-3");

      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.title;
      bookTitle.classList.add("card-title");

      const bookAuthor = document.createElement("p");
      bookAuthor.textContent = `Author: ${book.author}`;
      bookAuthor.classList.add("card-subtitle", "mb-2", "text-muted");

      const bookCategory = document.createElement("span");
      bookCategory.textContent = `Category: ${book.category}`;
      bookCategory.classList.add("card-text");

      bookCard.append(bookTitle, bookAuthor, bookCategory);
      bookContainer.appendChild(bookCard);
      bookList.appendChild(bookContainer);
    });
  }
}

const library = new Library();

addButton.addEventListener("click", () => {
  const title = inputTitle.value.trim();
  const author = inputAuthor.value.trim();
  const category = inputCategory.value.trim();

  if (!title || !author || !category) {
    alert("Please fill in all fields");
    return;
  }

  library.addBook(title, author, category);

  inputTitle.value = "";
  inputAuthor.value = "";
  inputCategory.value = "";
});

filterButton.addEventListener("click", () => {
  const category = filterCategory.value.trim();

  if (!category) {
    library.displayBooks(library.books);
    return;
  }

  library.filterBooks(category);
});
