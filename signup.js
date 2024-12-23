function signup() {
    const nameInput = document.getElementById('signup-name').value;
    const phoneInput = document.getElementById('signup-phone').value;
    const emailInput = document.getElementById('signup-email').value;
    const passwordInput = document.getElementById('signup-password').value;
    const signupMessage = document.getElementById('signup-message');

   
    if (!nameInput || !phoneInput || !emailInput || !passwordInput) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "All fields are required.";
        return;
    }

    if (!/^\d{10}$/.test(phoneInput)) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Phone number must be 10 digits.";
        return;
    }

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput)) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Please enter a valid email address.";
        return;
    }

   
    if (passwordInput.length < 6) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === emailInput);

    if (userExists) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "This email is already registered. Please use a different email.";
        return;
    }

    const user = {
        name: nameInput,
        phone: phoneInput,
        email: emailInput,
        password: passwordInput
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    signupMessage.style.color = "green";
    signupMessage.textContent = "Signup successful! Redirecting to login...";

    setTimeout(() => {
        window.location.href = "login.html"; 
    }, 2000);
}
