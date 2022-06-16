const emailForm = document.getElementById('email');
const nameForm = document.getElementById('name');
const messageForm = document.getElementById('message');

function handleChange() {
  const myFormData = {
    name: nameForm.value,
    email: emailForm.value,
    message1: messageForm.value,
  };

  localStorage.setItem('form', JSON.stringify(myFormData));
}
document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    nameForm.value = formObject.name;
    emailForm.value = formObject.email;
    messageForm.value = formObject.message1;
  }
});
nameForm.onchange = handleChange;
emailForm.onchange = handleChange;
messageForm.onchange = handleChange;
