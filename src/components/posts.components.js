import { Component } from '../core/component';
import { apiService } from '../services/app.service';
import { TransformService } from '../services/transform.service';
import { renderPost } from '../templates/post.template';

export class PostsComponents extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this));
  }

  async onShow() {
    this.$el.innerHTML = ''; // Чтобы при повторном клике на вкладку не дублировалось содержимое

    const fbdata = await apiService.fetchPost();
    console.log(fbdata); // получаем ответ от сервера в виде объекта с хэш-суммами, которые являются объектами (ссылками на наши посты)

    const posts = TransformService.fbObjectToArray(fbdata);
    console.log(posts); // Преобразуем в массив объектов, хранящий посты с сервера

    const html = posts.map((post) => renderPost(post, { withButton: true }));
    console.log(html); // Преобразуем массив объектов в массив строк, содержащих нашу вёрстку
    this.$el.insertAdjacentHTML('beforeend', html.join(' ')); // И собственно, добавляем всю нашу вёрстку на страницу
  }

  onHide() {
    this.$el.innerHTML = '';
  }
}

function buttonHandler(e) {
    // После рендера и вывода на страницу наших заметок займёмся работой с localStorage и обработке событий на кнопке нашей'заметки'
  const $el = e.target;
  console.log($el);

  const id = $el.dataset.id;
  console.log(id);

  const title = $el.dataset.title;
  console.log(title);

  if (id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites); // Проверка localStorage на наличие записей о постах которые мы кликнули для добавления в favorites. Получаем массив из объектов(id, title)

    const candidate = favorites.find((p) => p.id === id); // Сверка поста, который кликнули с данными в localStorage
    console.log(candidate);

    if (candidate) {
      // Нашли наш пост и удаляем запись о нём в localStorage
      $el.textContent = 'Add Favorite';
      favorites = favorites.filter((p) => p.id !== id); //Получаем массив постов без candidate (или пустой массив, если ни один не прошёл проверку)   

      document.querySelector(`[data-icon-id="${id}"]`).classList.toggle('heart-color-show'); // Здесь мы просто меняем цвет сердечка при удалении из favorite
      console.log(favorites);

    } else {
      // Добавить пост в localStorage
      $el.textContent = 'Remove Favorite';
      
      document.querySelector(`[data-icon-id="${id}"]`).classList.toggle('heart-color-show');
      favorites.push({ id, title }); //запушили в favorites объект
    }

    localStorage.setItem('favorites', JSON.stringify(favorites)); // обновляем запись в localStorage о постах, которые добавлены в favorites
  }
}
