export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
    console.log(this.form);
  }

  value() {
    const value = {};

    Object.keys(this.controls).forEach((control) => {
      value[control] = this.form[control].value; // Получаем значения из полей формы по значению атрибута 'name' наших 'input'ов'
    });

    return value;
  }

  clear() {
    Object.keys(this.controls).forEach((control) => {
      this.form[control].value = '';
    });
  }

  isValid() {
    let isFormValid = true;

    Object.keys(this.controls).forEach((control) => {
      const validators = this.controls[control]; // В переменную получаем наши валидаторы из объекта 'this.controls по ключу'
      let isValid = true; // Создаём  переменную для конкретного валидатора

      validators.forEach((validator) => {
        isValid = validator(this.form[control].value) && isValid; // Определяем валиден ли текущий 'control' и переопределяем переменную 'isValid'. Также будет учитываться валидность предыдущего поля, если значение 'false' валидация вернет ошибку.
      });

      if (!isValid) {
        setError(this.form[control]);
      } else {
        clearError(this.form[control]);
      }

      isFormValid = isFormValid && isValid; // Переопределяем значение, учитывая прошли ли проверку поля формы
    });

    return isFormValid;
  }
}

function setError($control) {
  clearError($control);
  const error = ($control.name === 'fulltext') ? 
  `<p class="validation-error">Please, fill in this field. The length must be at least 8 characters</p>` :
  `<p class="validation-error">Please, fill in this field</p>`; // Выводим ошибку в зависимости от поля

  $control.classList.add('invalid');
  $control.insertAdjacentHTML('afterend', error);
}

function clearError($control) {
  const $errorElem = $control.nextElementSibling; // Получаем нашу 'p'(элемент ошибки) и проверяем на наличие в документе. Если элемент отсутствует в документе то выходим из функции. Если присутствует удаляем элемент и класс 'invalid' у 'input'

  if (!$errorElem) {
    return;
  } else {
    $control.classList.remove('invalid');
    $errorElem.remove();
  }
}
