// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 1000);
// });
// console.log(promise);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then(
//     (data) =>
//       (document.body.innerHTML = `<h1>${data.title}</h1><p>${data.completed}</p>`),
//   )
//   .catch((error) => (document.body.innerHTML = "Not found"));

// 1. Using the Fetch API fetch the users from this endpoint https://randomuser.me/api/?results=10
// 2. Create cards for each user, displaying image, full name, phone and email.
// 3. Create “Show more” button to load additional 10 new users

// const btn = document.querySelector("button");
// const div = document.querySelector("div");

// let numberOfUsers = 10;

// const getUsers = () => {
//   fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       div.innerHTML = "";

//       data.results.forEach((element) => {
//         div.innerHTML += `
//     <div class="card">
//       <img src="${element.picture.medium}" class="cardImage">
//       <h5>${element.name.first} ${element.name.last}</h5>
//       <p>${element.phone}</p>
//       <span>${element.email}</span>
//     </div>`;
//       });
//     });
// };
// getUsers();

// btn.addEventListener("click", () => {
//   numberOfUsers += 10;
//   getUsers();
// });

// Send a POST request to typicode:
// a. Use https://jsonplaceholder.typicode.com/posts as the URL
// b. The data you send should be an object that contains: id, title, body and userId (id and userId
// are numbers, title and body are strings)
// c. First, log the response from the POST request you send
// d. Then, show the new post on screen, using the new title and body from the response

// const options = {
//   method: "POST",
//   body: JSON.stringify({
//     id: 101,
//     userId: 1,
//     title: "Hello",
//     main: "description",
//   }),
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//   Example 2
// 1. Create a blog.
// a. Load one blogpost from this url https://jsonplaceholder.typicode.com/posts/id
// 2. Under the blogpost, there should be a button that says ‘Load more’
// 3. Each time you press the button, one more post is loaded (added).
// 3 4. The page and the posts should be styled

// const loadBlog = {
//   method: "GET",
//   body: JSON.stringify({
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}),
// };

// const btn = document.querySelector("button");
// const div = document.querySelector("div");

// let currentBlog = 1;

// const getBlogs = () => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${currentBlog}`)
//     .then((response) => response.json())
//     .then((blog) => {
//       div.innerHTML += `
//         <div>
//           <h1>${blog.title}</h1>
//           <p>${blog.body}</p>
//         </div>
//       `;
//     });
// };
// getBlogs();

// btn.addEventListener("click", () => {
//   currentBlog++;
//   if (currentBlog <= 100) {
//     getBlogs();
//   }
// });

// Example 3
// 1. Create a paginated blog.
// a. Load one blogpost from this url https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1
// 2. It should list 5 posts per page.
// 3. It should have ‘Previous’ and ‘Next’ buttons for loading more posts.
// 3 4. The ‘Previous’ button should be disabled on the first page

// const div = document.querySelector("div");
// const nextBtn = document.querySelector("#nextBtn");
// const previousBtn = document.querySelector("#previousBtn");

// let currentPage = 1;

// const getPosts = () => {
//   fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`,
//   )
//     .then((response) => response.json())
//     .then((posts) => {
//       div.innerHTML = "";

//       posts.forEach((post) => {
//         div.innerHTML += `
//         <div>
//           <h1>${post.title}</h1>
//           <p>${post.body}</p>
//         </div>
//       `;
//       });

//       previousBtn.disabled = currentPage === 1;
//       nextBtn.disabled = currentPage === 20;
//     })
//     .catch((error) => console.error("Error fetching posts:", error));
// };
// getPosts();

// nextBtn.addEventListener("click", () => {
//   currentPage++;
//   getPosts();
// });

// previousBtn.addEventListener("click", () => {
//   currentPage--;
//   getPosts();
// });

// ASYNC/AWAIT

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const fetchPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchPosts();

// Promise.all

// Issue when making requests one by one
// const getData = async () => {
//   const res = await fetch("example.com/api/");
//   const data1 = await res.json();

//   const res1 = await fetch("example1.com/api/");
//   const data2 = await res1.json();

//   const res2 = await fetch("example2.com/api/");
//   const data3 = await res2.json();
// };

// Parallel requests

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()),
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
]).then(([users, posts]) => {
  console.log(users, posts);
});

// using async/await
