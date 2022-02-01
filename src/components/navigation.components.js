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

  // Получаем элемент навигации из массива this.tabs
  find(dataName) {
    const activeTab = this.tabs.find(({ name }) => {
      return name === dataName;
    });
    // console.log(activeTab);

    this.tabs.forEach((tab) => {
      if (tab === activeTab) {
        activeTab.component.show();
      } else {
        tab.component.hide();
      }
      // console.log(tab);
      // console.log(activeTab)
    });
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
  }
  e.target.classList.add('active');

  // С помощью данного метода получаем необходимый элемент из массива this.tabs, содержащий соответствующий табу компонент

  this.find(e.target.dataset.name);

  //   console.log(this);
}
