//Получение корневого элемента блока

export class Component {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.init();
  }

  onShow() {}

  onHide() {}

  init() {
    console.log('hello');
  }

  hide() {
    this.$el.classList.add('hide');
    this.onHide();
  }

  show() {
    this.$el.classList.remove('hide');
    this.onShow();
  }
}
