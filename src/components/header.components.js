import { Component } from '../core/component.js';

export class HeaderComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    const $btn = this.$el.querySelector('.js-header-start');
    $btn.addEventListener('click', buttonHandler.bind(this));
    // return $btn;
  }
}

export function buttonHandler() {
    this.hide();
}


// console.log(header);