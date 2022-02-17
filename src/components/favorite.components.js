import { Component } from '../core/component';
import { apiService } from '../services/app.service';
import { renderPost } from '../templates/post.template';

export class FavoriteComponents extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('click', linkClickHandler.bind(this));
  }

  onShow() {
    this.$el.innerHTML = ''; // Чтобы при клике на вкладку не дублировалось содержимое
    const favorites = JSON.parse(localStorage.getItem('favorites')); // Получаем массив из объектов,которые находятся в localStorage (с id и title)
    console.log(favorites);
    const html = renderList(favorites); //рендерим наш массив(превращаем его в вёрстку)

    this.$el.insertAdjacentHTML('afterbegin', html); // Выводим список favorites на страницу
  }

  onHide() {
    this.$el.innerHTML = '';
  }
}

async function linkClickHandler(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-link')) {
    this.$el.innerHTML = ''; // убираем с экрана все наши заметки

    const postId = e.target.dataset.id;
    const post = await apiService.fetchPostById(postId);
    console.log(post);

    this.$el.insertAdjacentHTML(
      'afterbegin',
      renderPost(post, { withbutton: false })
    );
    // e.target.remove()
  }
}

function renderList(list = []) {
  if (list.length) {
    return `
            <ul class="favorite__list favorite-list">
                 ${list
                   .map(
                     (i) =>
                       `<li class="favorite-list__item"><a href="#" class="js-link" data-id="${i.id}">${i.title}</a></li>`
                   )
                   .join(' ')}            
            </ul>`;
  } else {
    return `<div class="favorite__nothing">There is nothing here yet &#128553;</div>`;
  }
}
