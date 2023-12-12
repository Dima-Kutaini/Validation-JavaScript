/** @format */

const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
  validateForm();
  if (isFormValid() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll('.input-group');
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }

  });
    return result;
}

function validateForm() {
  if (usernameInput.value.trim() == '') {
    setError(usernameInput, "Name can't be empty");
  } else if (
    usernameInput.value.trim().length < 5 ||
    usernameInput.value.trim().length > 15
  ) {
    setError(usernameInput, 'Name must be min 5 an max 15 characters');
  } else {
    setSuccess(usernameInput);
  }

  //   email

  // email

  if (emailInput.value.trim() == '') {
    setError(emailInput, 'Provide email address');
  } else if (isEmailValid(emailInput.value.trim())) {
    // Pass the value to isEmailValid
    setSuccess(emailInput);
  } else {
    setError(emailInput, 'Email address is not valid');
  }
  // password
  if (passwordInput.value.trim() == '') {
    setError(passwordInput, 'Enter your password!');
  } else if (
    passwordInput.value.length < 6 ||
    passwordInput.value.length > 20
  ) {
    setError(passwordInput, ' password min 6 and max 20 characters');
  } else {
    setSuccess(passwordInput);
  }
  // confirmPassword
  if (confirmPasswordInput.value.trim() == '') {
    setError(confirmPasswordInput, ' confirm your password please');
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setError(confirmPasswordInput, ' password is not match ');
  } else {
    setSuccess(confirmPasswordInput);
  }
}
function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent.classList.add('success');
}

function isEmailValid(email) {
  const reg =
    /^([a-zA-Z0-9]+[\._%\+-]*[a-zA-Z0-9]+)*@([a-zA-Z0-9]+[\.-]*[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;
  return reg.test(email);
}
