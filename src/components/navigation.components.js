import { Component } from '../core/component.js';

export class NavigationComponents extends Component {
  constructor(id) {
    super(id);
    this.tabs = [];
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this));
  }
}

function tabClickHandler(e) {
  e.preventDefault();

  // получаем массив табов
  let tabsArray = Array.from(this.$el.querySelectorAll('.tabs__item'));

  //Перебираем табы, удаляем у всех 'active' и навешиваем 'active' - 'e.target'
  if (e.target.classList.contains('tabs__item')) {
    tabsArray.forEach((tab) => tab.classList.remove('active'));
    e.target.classList.add('active');
  } else {
    tabsArray.forEach((tab) => tab.classList.remove('active'));
    e.target.parentElement.classList.add('active');
  }

  console.log(e.target.parentElement);
}
