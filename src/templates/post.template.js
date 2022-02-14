export function renderPost(post, options = {}) {
  //   const tag =
  //     post.type === 'news'
  //       ? `<li class="tag tag-blue tag-rounded">News</li>`
  //       : `<li class="tag tag-blue tag-rounded">Note</li>`;

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log(favorites); // Для начала проверим localeStorage. Есть ли у нас там записи о постах, которые мы добавили в избранное

  const candidate = favorites.find((p) => p.id === post.id);
  console.log(candidate); // Теперь нам нужно произвести сверку поста, который рендерим на наличие о нём записи в localeStorage. В зависимости от этого мы будем отображать кнопку с соответствующей надписью

  const button = candidate
    ? `<button class="note__button_favorite" data-id="${post.id}" data-title="${post.title}">
        Remove Favorite</button>`
    : `<button class="note__button_favorite" data-id="${post.id}" data-title="${post.title}">
        Add Favorite</button>`;

  return ` <div class="todo__note note">
<div class="note__head">
    <div class="note__date">${post.date}</div>
    <div class="note__icon" data-icon-id="${post.id}">
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
  ${options.withButton ? button : ''} 
</div>
</div>`;
}
