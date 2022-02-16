import { Component } from '../core/component';

export class HeaderComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    //Делаем проверку в LocalStorage на посещение страницы
    if (localStorage.getItem('visited')) {
      this.hide();
    }

    // Получаем кнопку и вешаем на нее событие - скрыть header
    const $btn = this.$el.querySelector('.js-header-start');
    $btn.addEventListener('click', buttonHandler.bind(this));
  }
}

function buttonHandler() {
  this.hide();
  document.querySelector('.todo').classList.remove('hide'); // Открываем секцию
  localStorage.setItem('visited', JSON.stringify('header page is visited'));
  // Заносим в LocalStorage, что мы посетили страницу
}
