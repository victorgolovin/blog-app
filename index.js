const posts = [];                            // 25 делаем лист, для этого на нужен массив, поэтому меняем let post на const posts = []

const postTitleInputNode = document.querySelector('.js-post-title-input'); // 2 document.querySelector - позвляем достать элемент из html и обратится к нему по классу
const postTextInputNode = document.querySelector('.js-post-text-input'); // 19 добавляем константу для текста

const newPostBtnNode = document.querySelector('.js-new-post-btn'); // 3 Тоже саме делаем с кнопкой
const postNode = document.querySelector('.js-posts'); // 6 Создаем константу postNode, в которой у нас должно быть содеожимое постов


newPostBtnNode.addEventListener('click',function() { // 4 addEventListener добавляем обработчик событий('click') говоирит нам что при нажатии на кнопку что-то произойдет
    // (1) получить данные из поля ввода (это function getPostFromUser())
    const postFromUser = getPostFromUser(); // 14 Создаем новую переменную postFromUser и присваеваем ей данные из функции getPostFromUser()

    // (2) сохранить пост (это function addPost ({title, text}))
    addPost(postFromUser); // 15 Выводим функцию addPost в которую мы передаем postFromUser

    // (3) отобразить пост
    renderPosts();
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

function addPost({title, text}) { // 12 Создаем функцию которая будет создавать нам пост, в скобках пишем из чего он будет пока состоять в данном случае мы будем передавать newPost
    posts.push({
        title: title,
        text: text,
    }); // 13 Передаем значение переменной в newPost
}                     // 26 Делаем метод addPost и он будет получать post
                        // 27 пишем posts.push() команда push позваляет нам добавить post в массив 
                        // 28 для лучшей читаемости пишем в функцию обьекты {title, text} и пушим их в массив


function getPosts() { // 22 создаем getPost который будет возвращать post
    return posts;
}

function renderPosts() {  // 16 Создаем функцию которая будет нам отображать посты
    const post = getPosts(); // 23 обращаемся к функции getPost() в которой возвращаем post
                            // 24 Ниже обращаемся к post через див 

    let postsHTML = ''; // 30 Создаем postsHTML


    posts.forEach(post => { // 29 Создаем цикл 
        postsHTML += `
            <div class='post'>
                <p class='post__title'>${post.title}</p> 
                <p class='post__text'>${post.text}</p>
            </div>
        `
    });                       // 31 Копируем содержимое postHTML в posts.forEach, тут мы обращаемся к каждому посту в цикле

    // const postHTML = `
    // <div class='post'>
    //     <p class='post__title'>${post.title}</p>
    //     <p class='post__text'>${post.text}</p>
    // </div>
    // `;

    postNode.innerHTML = postsHTML; // 24 содержимое постов postNode через innerHTML приравниваем к postHTML
                                    // 32 ставим postsHTML
};