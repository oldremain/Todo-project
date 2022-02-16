import { Component } from '../core/component';
import { Form } from '../core/form';
import { Validators } from '../core/validators';
import { apiService } from '../services/app.service';

export class CreateComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
      // Получаем ссылку на объект формы в 'this.form' и ссылку на объект содержащий название наших 'input' в 'this.controls'
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

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };

    await apiService.createPost(formData);
    this.form.clear();
    alert('This post is created');
    console.log(formData);
  }
}
