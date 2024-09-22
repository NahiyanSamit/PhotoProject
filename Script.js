// // Login form to Home page after successful login
// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('login_form');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         window.location.href = 'Index.html';
//     });
// });
// // Registration form to Login page after successful registration
// document.addEventListener('DOMContentLoaded', function() {
//     const registrationForm = document.getElementById('register_form');

//     registrationForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         window.location.href = 'login.html';
//     });
// });
// Show password checkbox
document.addEventListener('DOMContentLoaded', function() {
    const showPasswordCheckbox = document.getElementById('show_password');
    const passwordInput = document.querySelector('input[name="password"]');

    showPasswordCheckbox.addEventListener('change', function() {
        passwordInput.type = this.checked ? 'text' : 'password';
    });
});

// Sidebar -----------------------------------------------------
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Get modal element--------------------------------------
var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');

// Get the login link
var loginLink = document.getElementById('loginLink');
var loginLinkSidebar = document.getElementById('loginLinkSidebar');

// Add event listener to both login links
loginLink.addEventListener('click', openLoginModal);
loginLinkSidebar.addEventListener('click', openLoginModal);

// Function to load login content and open modal
function openLoginModal(event) {
    event.preventDefault(); // Prevent default behavior (navigation)
    
    // Load the content of login.html dynamically using fetch
    fetch('Login.html')
        .then(response => response.text())
        .then(html => {
            modalContent.innerHTML = html; // Inject login form into modal content
            modal.style.display = 'flex';  // Display the modal
        });
}

// Close the modal if the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none'; // Hide modal
    }
});

// Get the register link
var registerLink = document.getElementById('registerLink');
var registerLinkSidebar = document.getElementById('registerLinkSidebar');

// Add event listener to both register links
registerLink.addEventListener('click', openRegisterModal);
registerLinkSidebar.addEventListener('click', openRegisterModal);

// Function to load register content and open modal
function openRegisterModal(event) {
    event.preventDefault(); // Prevent default behavior (navigation)
    
    // Load the content of register.html dynamically using fetch
    fetch('Register.html')
        .then(response => response.text())
        .then(html => {
            modalContent.innerHTML = html; // Inject register form into modal content
            modal.style.display = 'flex';  // Display the modal
        });
}


