const form = document.querySelector('#form1');
const nameForm = document.querySelector('#name');
const email = document.querySelector('#email');
const messageForm = document.querySelector('#message');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const showError = inputControl.querySelector('.error');
  showError.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const showError = inputControl.querySelector('.error');
  showError.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isEmailValid = (email) => {
  const regX = /^ ([a - z\d -] +)@([a - z\d -] +) \.([a - z]{ 2, 8 }) (\.[a - z]{ 2, 8 })?$ /;
  return regX.test(String(email));
};

const isUpper = (email) => {
  const reg = /[a-z]/.test(email) && /[A-Z]/.test(email);
  return reg;
};

const validate = () => {
  const nameValue = nameForm.value.trim();
  const emailValue = email.value.trim();
  const messageValue = messageForm.value.trim();

  if (nameValue === '') {
    setError(nameForm, 'Name is required');
  } else {
    setSuccess(nameForm);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
    // return 0;
  } else if (isUpper(emailValue)) {
    setError(email, 'email should be in lowercase');
    // return 0;
  } else if (isEmailValid(emailValue)) {
    setError(email, 'Provide a valid email address');
    return 0;
  } else {
    setSuccess(email);
  }

  if (messageValue === '') {
    setError(messageForm, 'description is required');
  } else {
    setSuccess(messageForm);
    return form.submit();
  }
  return 0;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validate();
});
