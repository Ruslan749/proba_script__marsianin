
'use strict';

document.addEventListener('DOMContentLoaded', () =>{ // скрипт будет работать только тогда когда занпузиться вся структура сайта
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
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]'); 
    
    addForm.addEventListener('submit', (event) => { //

        event.preventDefault(); // сбрасываем стандартное поведение браузера

        let newFilm = addInput.value;// будет содержаться то что ввел пользователь
        const favorite = checkbox.checked; // атрибут по которому будет получаться булиновое значение

        if (newFilm) { //  условие для проверки данных введеные пользователем. если пустая строка то значение false  и условие не выполниться, если что то заполнено то true  и наше условие выполниться.

            if (newFilm.length > 21) { // создаем условие и если у нас количество символов больше 21 то текст обрежеться и вставиться многоточие

                newFilm = `${newFilm.substring(0, 22)}...`;

            }
            
            if (favorite) {
                console.log(' добавляем любимый фильм')
            }

            movieDB.movies.push(newFilm); // добавит в массив данные которые ввел пользователь

            sortArr(movieDB.movies); // сортировка данных по алфовиту в базе данных при помощи переиспользования функций
    
            createMoviesList(movieDB.movies, movieList); //  заного создаем базу данных с переиспользованием функции 
        }



        event.target.reset(); // очищаем нашу форму для заполнения

    });

    const deleteAdv = (arr) =>{
            // 1 задание
        arr.forEach( item => { // удаляем все теги img  на странице
        item.remove();
        });
    };
 
    

    
    const makeChanges = () =>{
            // 2 задание
    genre.textContent=  'Драмма'; // заменяем комедия на драмма
    
    // 3 задание
    poster.style.backgroundImage = 'url("img/bg.jpg")';// обращаемся к определенному стилю селектора и переписываем его на другое значение.
    };


    const sortArr = (arr) => {
        movieDB.movies.sort(); // сортируем наш список фильмов
    };




    function createMoviesList(films, parent) {
         // 4 и 5 задание
        parent.innerHTML = ""; // записываем пустату в тег(очищаем все содержимое)

        sortArr(films); // используем пофторно нашу функцию для сортировки фильмов

        films. forEach((film, i ) =>{ //запуск цикла с цель получение данных из переменной и дальнейшего его изменения( films - значение, i - номер по порядку)
        parent.innerHTML += `                        
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
       `;
        });

        document.querySelectorAll('.delete').forEach ((btn , i) =>{// функция для перебора карзинки которая появляеться при наведении каждого элимента в базе данных, и выполнении действий с ними. 

            btn.addEventListener('click', () =>{ // при клике на выбранною карзинку в списке она выполняет функцию удаление из базы данных и со страницы
                btn.parentElement.remove(); // удаление со страници

                movieDB.movies.splice( i, 1 ); // удаление из базы данных (номер по порядку, количество элиментов для удаления)

                createMoviesList(films, parent); // функция заного вызовиться для перестройки списка с фильмами
            });
        }); 
    }

    deleteAdv(adv);
    makeChanges();

    createMoviesList(movieDB.movies, movieList);
});