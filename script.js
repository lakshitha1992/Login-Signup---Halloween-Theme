document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Add the "ghostly fade-out" animation to the login form
    loginForm.classList.add('form-transition-out');

    // After the animation, hide the login form and show the signup form with animation
    setTimeout(() => {
        loginForm.classList.add('hidden');
        loginForm.classList.remove('form-transition-out');
        signupForm.classList.remove('hidden');
        signupForm.classList.add('form-transition-in');

        // Remove the "form-transition-in" class after the animation completes
        setTimeout(() => signupForm.classList.remove('form-transition-in'), 1000);
    }, 1000);
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Add the "ghostly fade-out" animation to the signup form
    signupForm.classList.add('form-transition-out');

    // After the animation, hide the signup form and show the login form with animation
    setTimeout(() => {
        signupForm.classList.add('hidden');
        signupForm.classList.remove('form-transition-out');
        loginForm.classList.remove('hidden');
        loginForm.classList.add('form-transition-in');

        // Remove the "form-transition-in" class after the animation completes
        setTimeout(() => loginForm.classList.remove('form-transition-in'), 1000);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');

    // Remove the min date restriction for birthday input (allow past dates)
    // Set the maximum date to today's date, ensuring users can't select future dates
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('max', today);
});
