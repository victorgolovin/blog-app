const posts = [];

const TITLE_VALIDATION_LIMIT = 100;
const TEXT_VALIDATION_LIMIT = 200;
const TITLE_VALIDATION = "Введите заголовок!";
const TEXT_VALIDATION = "Введите текст!";

const postTitleInputNode = document.querySelector(".js-post-title-input");
const postTextInputNode = document.querySelector(".js-post-text-input");

let newPostBtnNode = document.querySelector(".js-new-post-btn");
const postNode = document.querySelector(".js-posts");
const validationMessage = document.querySelector(".js-validation-message");

newPostBtnNode.addEventListener("click", function () {
  if (postTitleInputNode.value === "") {
    emptyString();
    return;
  }

  if (postTextInputNode.value === "") {
    emptyString();
    return;
  }

  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  clearInput();

  renderPosts();
});

postTitleInputNode.addEventListener("input", function () {
  validation();
});

postTextInputNode.addEventListener("input", function () {
  validation();
});

function validation() {
  const titleLength = postTitleInputNode.value.length;
  const textLength = postTextInputNode.value.length;

  if (titleLength > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `Заголовок больше ${TITLE_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validation-message-hidden");
    newPostBtnNode = document.querySelector(".js-new-post-btn").disabled = true;
    return;
  }

  if (textLength > TEXT_VALIDATION_LIMIT) {
    validationMessage.innerText = `Пост больше ${TEXT_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validation-message-hidden");
    newPostBtnNode = document.querySelector(".js-new-post-btn").disabled = true;
    return;
  }

  newPostBtnNode = document.querySelector(".js-new-post-btn").disabled = false;
  validationMessage.classList.add("validation-message-hidden");
}

function clearInput() {
  postTitleInputNode.value = "";
  postTextInputNode.value = "";
}

function emptyString() {
  if (postTextInputNode.value === "")
    validationMessage.innerText = `${TEXT_VALIDATION}`;
  validationMessage.classList.remove("validation-message-hidden");

  if (postTitleInputNode.value === "")
    validationMessage.innerText = `${TITLE_VALIDATION}`;
  validationMessage.classList.remove("validation-message-hidden");

  return;
}

function getPostFromUser() {
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  const currentDate = new Date();
  const dt = `
    ${(currentDate.getDay() < 9 ? "0" : "") + (currentDate.getDay() + 1)}.${
    (currentDate.getMonth() < 9 ? "0" : "") + (currentDate.getMonth() + 1)
  }.${currentDate.getFullYear()}
    ${currentDate.getHours()}:${
    (currentDate.getMinutes() < 9 ? "0" : "") + (currentDate.getMinutes() + 1)
  }:${
    (currentDate.getSeconds() < 9 ? "0" : "") + (currentDate.getSeconds() + 1)
  }
    `;

  posts.push({
    dt: dt,
    title: title,
    text: text,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();

  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
            <div class='post'>
                <p class='post__date'>${post.dt}</p> 
                <p class='post__title'>${post.title}</p> 
                <p class='post__text'>${post.text}</p>
            </div>
        `;
  });

  postNode.innerHTML = postsHTML;
}