import { Component } from '../core/component.js';
import { Form } from '../core/form.js';

export class CreateComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.form = new Form(this.$el, {
      title: [], //[Validators.required,Validators.required],
      fulltext: [], //[Validators.required, Validators.minLength(8)]
    });
    this.$el.addEventListener('submit', submitHandler.bind(this));
  }
}

function submitHandler(e) {
    e.preventDefault();
    console.log('Hello') ;   
}