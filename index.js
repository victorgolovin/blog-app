let post = ''; // 1 добавили пустую переменную, добовляем в html класс js-title-input и js-publication-btn

const titleInputNode = document.querySelector('.js-title-input'); // 2 document.querySelector - позвляем достать элемент из html и обратится к нему по классу
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
    const post = titleInputNode.value; // 11 (5 до рефакторинга) переменная postTitle обращается к titleInputNode.value

    return post; // 10 заранее пишем что мы будем возращать
}

function setPost (newPost) { // 12 Создаем функцию которая будет создавать нам пост, в скобках пишем из чего он будет пока состоять в данном случае мы будем передавать newPost
    post = newPost; // 13 Передаем значение переменной в newPost
}

function renderPost() {  // 16 Создаем функцию которая будет нам отображать посты
    postNode.innerText = post;  // 17 (7до рефакторинга) подставляем переменную postTitle, теперь при вводе текста в инпут и при нажатии на кнопку данные идут в ленту, после факторинга отправляем в функцию
}

