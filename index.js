let post = {  // 1 добавили пустую переменную, добовляем в html класс js-title-input и js-publication-btn
    title: '',                // 18 пунктом меняем переменную на обьект, добовляем пустые title and text
    text: '',
};

const postTitleInputNode = document.querySelector('.js-post-title-input'); // 2 document.querySelector - позвляем достать элемент из html и обратится к нему по классу
const postTextInputNode = document.querySelector('.js-post-text-input'); // 19 добавляем константу для текста

const newPostBtnNode = document.querySelector('.js-new-post-btn'); // 3 Тоже саме делаем с кнопкой
const postNode = document.querySelector('.js-posts'); // 6 Создаем константу postNode, в которой у нас должно быть содеожимое постов


newPostBtnNode.addEventListener('click',function() { // 4 addEventListener добавляем обработчик событий('click') говоирит нам что при нажатии на кнопку что-то произойдет
    // (1) получить данные из поля ввода (это function getPostFromUser())
    const postFromUser = getPostFromUser(); // 14 Создаем новую переменную postFromUser и присваеваем ей данные из функции getPostFromUser()

    // (2) сохранить пост (это function setPost (newPost))
    setPost(postFromUser); // 15 Выводим функцию setPost в которую мы передаем postFromUser

    // (3) отобразить пост
    renderPost();
});

// 8 Делаем рефакторинг

function getPostFromUser() { // 9 создаем функцию которая будет возвращать пост
    const title = postTitleInputNode.value; // 11 (5 до рефакторинга) задаем переменную для title 
    const text = postTextInputNode.value; // 20 задаем переменную для text

    return {    // 21 будем возвращать обьект
        title: title,
        text: text,
    }; 
}

function setPost (newPost) { // 12 Создаем функцию которая будет создавать нам пост, в скобках пишем из чего он будет пока состоять в данном случае мы будем передавать newPost
    post = newPost; // 13 Передаем значение переменной в newPost
}

function getPost() { // 22 создаем getPost который будет возвращать post
    return post;
}

function renderPost() {  // 16 Создаем функцию которая будет нам отображать посты
    const post = getPost(); // 23 обращаемся к функции getPost() в которой возвращаем post
                            // 24 Ниже обращаемся к post через див 
    const postHTML = `
    <div class='post'>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
    </div>
    `;

    postNode.innerHTML = postHTML; // 24 содержимое постов postNode через innerHTML приравниваем к postHTML
}                           

