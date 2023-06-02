const posts = [];  

const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 20;

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');

const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postNode = document.querySelector('.js-posts');
const validationMessage = document.querySelector('.js-validation-message'); // (P)Создаем конст через id


newPostBtnNode.addEventListener('click',function() {
    // (1) получить данные из поля ввода (это function getPostFromUser())
    const postFromUser = getPostFromUser(); 

    // (2) сохранить пост (это function addPost ({title, text}))
    addPost(postFromUser); // 15 Выводим функцию addPost в которую мы передаем postFromUser

    // (3) отобразить пост
    renderPosts();
});

postTitleInputNode.addEventListener('input',function() { // (P)Передаем event обращаемся к 'input'
    validation()
});

postTextInputNode.addEventListener('input',function() { // (P) тоже самое делаем и с текстом
    validation()
});


function validation() {
    const titleLength = postTitleInputNode.value.length; // (P) value - значение, length - длина
    const textLength = postTextInputNode.value.length;

    if (titleLength > TITLE_VALIDATION_LIMIT) {
        validationMessage.innerText = `Заголовок больше ${TITLE_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove('validation-message-hidden');
        newPostBtnNode = document.querySelector('.js-new-post-btn').disabled = true; // ADD BY ME (Скрывает кнопку если много символов)
        return; // (P) Вернули значение функции
    }
    
    if (textLength > TEXT_VALIDATION_LIMIT) {
        validationMessage.innerText = `Пост больше ${TEXT_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove('validation-message-hidden');
        newPostBtnNode = document.querySelector('.js-new-post-btn').disabled = true; // ADD BY ME (Скрывает кнопку если много символов)
        return; // (P) Вернули значение функции
    }

    newPostBtnNode = document.querySelector('.js-new-post-btn').disabled = false; // ADD BY ME (Показывает кнопку)
    validationMessage.classList.add('validation-message-hidden'); // (P) Это условия выполнится если два верних не выполнится
}


function getPostFromUser() {
    const title = postTitleInputNode.value; // value - получение значения
    const text = postTextInputNode.value;


    return {
        title: title,
        text: text,
    }; 
}


function addPost({title, text}) {
    posts.push({
        title: title,
        text: text,
    });
}


function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';


    posts.forEach(post => { 
        postsHTML += `
            <div class='post'>
                <p class='post__title'>${post.title}</p> 
                <p class='post__text'>${post.text}</p>
            </div>
        `
    });

    postNode.innerHTML = postsHTML;
};