document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  
  form.addEventListener('input', () => {
    const feedbackState = {
      email: emailInput.value,
      message: messageInput.value,
    };

   
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
  });

  
  window.addEventListener('load', () => {
    const storedState = localStorage.getItem('feedback-form-state');

    if (storedState) {
      const parsedState = JSON.parse(storedState);
      emailInput.value = parsedState.email;
      messageInput.value = parsedState.message;
    }
  });


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const feedbackState = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(feedbackState);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
})