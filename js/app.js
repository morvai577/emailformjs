// Variables
const sendBtn = document.getElementById('sendBtn');

// Event Listeners

eventListeners();

function eventListeners() {
    // App Init
    document.addEventListener('DOMContentLoaded', appInit);
}


// Functions

// App Initilisation
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}