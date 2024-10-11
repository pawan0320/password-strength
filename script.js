function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthMessage = document.getElementById("strength-message");

    let strength = 0;
    // Regular expressions for checking different conditions
    const lengthRegex = /.{8,}/; // At least 8 characters
    const upperCaseRegex = /[A-Z]/; // At least one uppercase letter
    const lowerCaseRegex = /[a-z]/; // At least one lowercase letter
    const numberRegex = /\d/; // At least one number
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    // Check conditions and increase strength accordingly
    if (lengthRegex.test(password)) strength++;
    if (upperCaseRegex.test(password)) strength++;
    if (lowerCaseRegex.test(password)) strength++;
    if (numberRegex.test(password)) strength++;
    if (specialCharRegex.test(password)) strength++;

    // Provide feedback based on the password's strength
    if (strength === 0) {
        strengthMessage.textContent = "";
    } else if (strength < 3) {
        strengthMessage.textContent = "Weak";
        strengthMessage.className = "weak";
    } else if (strength === 3 || strength === 4) {
        strengthMessage.textContent = "Medium";
        strengthMessage.className = "medium";
    } else if (strength === 5) {
        strengthMessage.textContent = "Strong";
        strengthMessage.className = "strong";
    }
}