const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

let emailForm = form.elements.email.value.trim();
let messageForm = form.elements.message.value.trim();
let formValue = {};

form.addEventListener('input', evt => {
  emailForm = form.elements.email.value.trim();
  messageForm = form.elements.message.value.trim();

  if (emailForm && messageForm) {
    formValue = {
      email: emailForm,
      message: messageForm,
    };

    localStorage.setItem(LS_KEY, JSON.stringify(formValue));
  }
});

let savedFormValue = localStorage.getItem(LS_KEY);
if (savedFormValue) {
  formValue = JSON.parse(savedFormValue);
} else {
  form.elements.email.value = "";
form.elements.message.value = "";
}

form.elements.email.value = formValue.email;
form.elements.message.value = formValue.message;

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(formValue);
  localStorage.removeItem(LS_KEY);
  form.reset();
});
