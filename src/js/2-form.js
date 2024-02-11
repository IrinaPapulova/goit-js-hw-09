const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

let formValue = {};

const emailForm = form.elements.email;
const messageForm = form.elements.message;


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if(emailForm.value === "" || messageForm.value === "") {
    alert("All form fields must be filled in");
  } else {
    formValue = {
      email: emailForm.value.trim(),
      message: messageForm.value.trim(),
    }
    localStorage.setItem(LS_KEY, JSON.stringify(formValue));
    console.log(formValue);
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
  }
};

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  formValue = {
    email: emailForm.value.trim(),
    message: messageForm.value.trim(),
  }

  localStorage.setItem(LS_KEY, JSON.stringify(formValue));
}

function fillFields() { 
  const savedFormValue = localStorage.getItem(LS_KEY);
  if (savedFormValue) {
    const parsedFormValue = JSON.parse(savedFormValue);
    form.elements.email.value = parsedFormValue.email;
    form.elements.message.value = parsedFormValue.message;
  } else {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}

fillFields();





