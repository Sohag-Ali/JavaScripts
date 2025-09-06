const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json));
};

const displayPost = (posts) => {

    // 1.get he container
    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = "";
    // console.log(postContainer);

    posts.forEach((post) => {
        // console.log(post.title);
        // 2. create HTML element
        const li = document.createElement("li");
        li.innerText = post.title;
        // console.log(li)

        // 3. add li into container

        postContainer.appendChild(li);
    });

// for (let post of posts) {
//   console.log(post);
// }
};


