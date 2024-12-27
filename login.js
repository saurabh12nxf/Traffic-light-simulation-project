function login() {
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;
    const loginMessage = document.getElementById('login-message');


    if (!emailInput || !passwordInput) {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Both fields are required.";
        return;
    }


    if (!/\S+@\S+\.\S+/.test(emailInput)) {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Please enter a valid email address.";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "homepage.html"; 
        }, 2000);
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid email or password. Please try again.";
    }
}
function logout() {
    sessionStorage.removeItem('loggedInUser'); 
    alert("You have been logged out.");
    window.location.href = "index.html"; 
}
