const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json));
};

// {
//     "userId": 9,
//     "id": 89,
//     "title": "sint soluta et vel magnam aut ut sed qui",
//     "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
// }

const displayPost = (posts) => {

    // 1. get hte container and empty the container

    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach((post) => {
        
        // 2. create element

        const postCard = document.createElement("div");

        postCard.innerHTML = ` <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;

    // 3. add to the container

    postContainer.append(postCard);
    });
};

loadPost();


