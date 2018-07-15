// Variables
const sendBtn = document.getElementById('sendBtn'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message');

// Event Listeners

eventListeners();

function eventListeners() {
    // App Init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}


// Functions

// App Initilisation
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}

// Validate the fields
function validateField() {
    let errors;

    // Validate the length of the field
    validateLength(this);

    // Validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }
}

// Validates the length of the fields
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Both will return errors, then check if there are any errors
errors = document.querySelectorAll('.error');

// Check inputs are non-empty
if(email.value !== '' && subject.value !== '' && message.value !== '') {
    if(errors.length === 0) {
        // the send button should be enabled
        sendBtn.disabled = false;
    }
}

// Validate email (checks for @ in the value)
function validateEmail(field) {
    let emailText = field.value;
    //check if the email text contains the @ sign
    if (emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}