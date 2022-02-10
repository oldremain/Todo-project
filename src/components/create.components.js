import { Component } from '../core/component.js';
import { Form } from '../core/form.js';
import { Validators } from '../core/validators.js';

export class CreateComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(8)],
    });
    this.$el.addEventListener('submit', submitHandler.bind(this));
    // console.log(Object.keys(this.form.value()));
  }
}

async function submitHandler(e) {
  e.preventDefault();

  if (true) {
    const formData = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };
    console.log(formData);
  }

//   await apiService.createPost(formData);
//   this.form.clear();
//   alert('This post is created');
}
