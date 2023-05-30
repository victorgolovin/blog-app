let postTitle = ''; // 1 добавили пустую переменную, добовляем в html класс js-title-input и js-publication-btn

const titleInputNode = document.querySelector('.js-title-input'); // 2 document.querySelector - позвляем достать элемент из html и обратится к нему по классу
const newPostBtnNode = document.querySelector('.js-new-post-btn'); // 3 Тоже саме делаем с кнопкой

newPostBtnNode.addEventListener('click',function() { // 4 addEventListener добавляем обработчик событий('click') говоирит нам что при нажатии на кнопку что-то произойдет
    postTitle = titleInputNode.value; // 5 переменная postTitle обращается к titleInputNode.value

    console.log(postTitle)
});

