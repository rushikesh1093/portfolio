// script.js

// Get the login form element by its ID
const loginForm = document.getElementById("login-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and password input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your own logic here to handle the login process
    // For this example, we'll just display the input values in an alert
    alert(`Username: ${username}\nPassword: ${password}`);
});
