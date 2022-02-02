// Homebutton 
import { Component } from '../core/component.js';

export class HomeButton extends Component {
    constructor(id, header) {
        super(id);
        this.header = header;
    }
    init() {
        this.$el.addEventListener('click', homeClickHandler.bind(this));
    }
}

function homeClickHandler() {
    localStorage.clear();
    this.header.show();
}