const title = document.getElementById("title");
const author = document.getElementById("author");
const category = document.getElementById("category");
const addBookBtn = document.getElementById("addBookBtn");
const filterInput = document.getElementById("filterCategory");
const bookList = document.getElementById("bookList");

let books = [];

class Book {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
  }
}

function renderBooks(bookArray) {
  bookList.innerHTML = "";

  bookArray.forEach((book, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "bookWrap";

    wrapper.innerHTML = `
          <div class="book">
            <div class="spine"></div>
            <div class="cover">
              <h4>${book.title}</h4>
              <p>${book.author}</p>
              <span>${book.category}</span>
              <button class="delete-btn" onclick="deleteBook(${index})">
              &times;
              </button>
            </div>
          </div>
        `;

    bookList.appendChild(wrapper);

    // intro animation
    setTimeout(() => {
      const bookEl = wrapper.querySelector(".book");
      bookEl.classList.add("bookIntro");

      setTimeout(() => {
        bookEl.classList.remove("bookIntro");
      }, 2000);
    }, 200);
  });
}

addBookBtn.addEventListener("click", () => {
  if (!title.value || !author.value || !category.value) {
    alert("Fill all fields");
    return;
  }

  books.push(new Book(title.value, author.value, category.value));
  renderBooks(books);

  title.value = "";
  author.value = "";
  category.value = "";
});

filterInput.addEventListener("keyup", () => {
  const value = filterInput.value.toLowerCase();
  const filtered = books.filter((book) =>
    book.category.toLowerCase().includes(value)
  );
  renderBooks(filtered);
});

function deleteBook(index) {
  books.splice(index, 1);
  renderBooks(books);
}

// Seed data
books.push(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction"),
  new Book("A Brief History of Time", "Stephen Hawking", "Science"),
  new Book("The Art of War", "Sun Tzu", "Philosophy"),
  new Book("Meditations", "Marcus Aurelius", "Philosophy")
);

renderBooks(books);
