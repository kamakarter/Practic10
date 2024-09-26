let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})

// ---------------------------------------

const error = document.querySelector('.error');
const form = document.querySelector('.form_add');
const nameInput = form.querySelector('.form_news_name');
const textInput = form.querySelector('.form_news_text');
const newsWrapper = document.querySelector('.news-wrapper');


const newsArray = [];


// событие
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // значения полей формы
    const NewsName = nameInput.value.trim();
    const NewsText = textInput.value.trim();

    // console.log(nameInput);
    // console.log(textInput);
    // console.log(NewsName);
    // console.log(NewsText);

    // Валидация названия
    if (!NewsName) {
        error.innerHTML = 'Поле с названием пустое';
        nameInput.style.border = 'thin solid red';
        return;
    }
    else if (NewsName.length < 8) {
        error.innerHTML = 'Длина названия должна быть минимум 8 символов';
        nameInput.style.border = 'thin solid red';
        return;
    }
    else {
        nameInput.style.border = '';
    }

    // Валидация текста
    if (!NewsText) {
        error.innerHTML = 'Поле с текстом пустое';
        textInput.style.border = 'thin solid red';
        return;
    }
    else if (NewsText.length < 300) {
        error.innerHTML = 'Длина текста должна быть минимум 300 символов';
        textInput.style.border = 'thin solid red';
        return;
    } 
    else {
        // textInput.style.border = 'thin solid green';
        // error.innerHTML = 'Успешное добавление';

        newsArray.push({name:NewsName, text: NewsText});

            nameInput.value = '';
            textInput.value = '';
            newsWrapper.innerHTML = '';

            newsArray.forEach((news) => {
                const listItem = document.createElement('div');
                listItem.classList.add('news-item');

                listItem.innerHTML = `
                    <h3 class="h3">${news.name}</h3>
                    <p class="news-item__p">${news.text}</p>
                `;
                newsWrapper.appendChild(listItem);
            });
    }
});


document.querySelector('.btn_b').addEventListener('click',(e)=> {
    e.preventDefault();
    document.body.style.background = '#333333';
})

document.querySelector('.btn_w').addEventListener('click',(e)=> {
    e.preventDefault();
    document.body.style.background = '#ffffff';
})