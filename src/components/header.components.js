import { Component } from '../core/component.js';

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

export function buttonHandler() {
  this.hide();

  // Заносим в LocalStorage, что мы посетили страницу
  localStorage.setItem('visited', 'header page is visited'); 
}
