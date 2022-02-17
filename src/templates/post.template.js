export function renderPost(post, options = {}) {
    const tag =
      post.type === 'news'
        ? `<div class="note__type">News</div>`
        : `<div class="note__type">Note</div>`;

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log(favorites); // Для начала проверим localeStorage. Есть ли у нас там записи о постах, которые мы добавили в избранное

  const candidate = favorites.find((p) => p.id === post.id);
  console.log(candidate); // Теперь нам нужно произвести сверку поста, который рендерим на наличие о нём записи в localeStorage. В зависимости от этого мы будем отображать кнопку с соответствующей надписью, а также подсвечивать либо нет 'наше сердечко'  Для favorite.component нам эти дейстивя не актуальны, т.к.параметры кнопки мы передаём в функцию как false

  const button = candidate
    ? `<button class="note__button_favorite" data-id="${post.id}" data-title="${post.title}">
        Remove Favorite</button>`
    : `<button class="note__button_favorite" data-id="${post.id}" data-title="${post.title}">
        Add Favorite</button>`;
   
  return ` <div class="todo__note note note-fv">
<div class="note__head">
    <div class="note__date">${post.date}</div>
    ${options.withButton ? '' : `${tag}`} 
    <div class="note__icon ${candidate ? 'heart-color-show' : ''} ${options.withButton ? '' : 'hide'} " data-icon-id="${post.id}">
      <i class="fas fa-heart"></i>
    </div>
</div>
<div class="note__body">
    <div class="note__title">${post.title}</div>
    <div class="note__text">
      ${post.fulltext}
    </div>
</div>
<div class="buttons-row">
  ${options.withButton ? button : ' '} 
</div>
</div>`;
}
