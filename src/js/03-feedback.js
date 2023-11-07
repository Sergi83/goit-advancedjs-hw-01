// get to form and inputs
const elements = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

// create key for local storage
const LS_KEY = 'feedback-form-state';

// get data from local storage
const getFormData = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};

// set required inputs
elements.email.required = true;
elements.message.required = true;

// sinchronize input values with local storage data (add default if there is no data in the storage)
elements.email.value = getFormData.email ?? '';
elements.message.value = getFormData.message ?? '';

// add event listeners to form
elements.form.addEventListener('input', hundleInput);
elements.form.addEventListener('submit', hundleSubmit);

// on input event add data to local storage
function hundleInput(e) {
  const { target } = e;
  getFormData[target.name] = target.value;

  // add key: data to local storage
  localStorage.setItem(LS_KEY, JSON.stringify(getFormData));
}

// on submit event clear form's inputs and form data from local storage (show sent data in console)
function hundleSubmit(e) {
  e.preventDefault();
  console.log(getFormData);
  localStorage.removeItem(LS_KEY);
  elements.form.reset();
  getFormData.email = '';
  getFormData.message = '';
}
