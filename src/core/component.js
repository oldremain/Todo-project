//Получение корневого элемента блока

export class Component {
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init();
    }
    init() {
        console.log('hello');
    }
    hide() {
        this.$el.classList.add('hide');
        // console.log('i am hide');
    }
    show() {
        this.$el.classList.remove('hide');
    }
}

