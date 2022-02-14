import { Component } from '../core/component.js';

export class NavigationComponents extends Component {
  constructor(id) {
    super(id);
    this.tabs = [];
  }
  // Создаём метод для сбора всех компонентов навигации вместе
  registerTabs(tabs) {
    this.tabs = tabs;
  }
  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this));
  }
}

function tabClickHandler(e) {
  e.preventDefault();

  // получаем массив табов
  let tabsArray = Array.from(this.$el.querySelectorAll('.tabs__item'));

  //Перебираем табы, удаляем у всех 'active' и навешиваем 'active' - 'e.target' для эффекта переключения
  if (e.target.classList.contains('tabs__item')) {
    tabsArray.forEach((tab) => tab.classList.remove('active'));
  }
  e.target.classList.add('active');

  // Получаем элемент навигации из массива this.tabs
  const activeTab = this.tabs.find(({ name }) => {
    return name === e.target.dataset.name;
  });
  // console.log(activeTab);

  this.tabs.forEach((tab) => {
    if (tab === activeTab) {
      tab.component.show();
    } else {
      tab.component.hide();
    }
    // console.log(tab);
    // console.log(activeTab)
  });
  //   console.log(this);
}
