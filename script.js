/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list')

// 1 задание
adv.forEach( item => { // удаляем все теги img  на странице
    item.remove();
});

// 2 задание
genre.textContent=  'Драмма'; // заменяем комедия на драмма

// 3 задание
poster.style.backgroundImage = 'url("img/bg.jpg")';// обращаемся к определенному стилю селектора и переписываем его на другое значение.

// 4 и 5 задание
movieList.innerHTML = ""; // записываем пустату в тег(очищаем все содержимое)

movieDB.movies.sort(); // сортируем наш список фильмов

movieDB.movies. forEach((films, i ) =>{ //запуск цикла с цель получение данных из переменной и дальнейшего его изменения( films - значение, i - номер по порядку)
    movieList.innerHTML += `                        
    <li class="promo__interactive-item">${i + 1} ${films}
        <div class="delete"></div>
    </li>
   `;
});