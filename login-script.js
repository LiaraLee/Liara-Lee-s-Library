const loginForm = document.getElementById("login-form");
const feedback = document.getElementById("login-feedback");

// Check if a user is already logged in when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const storedUser = JSON.parse(localStorage.getItem("member"));
  if (storedUser) {
    feedback.textContent = `Welcome back, ${storedUser.firstName}!`;
    feedback.style.color = "green";
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.Email.value.trim(); // match the HTML 'Email' id
  const password = loginForm.Password.value.trim(); // match the HTML 'Password' id
  const storedUser = JSON.parse(localStorage.getItem("member"));

  if (!storedUser) {
    showFeedback("No member found. Please sign up first.", "red");
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    showFeedback(`Welcome back, ${storedUser.firstName}!`, "green");
    localStorage.setItem("isLoggedIn", "true"); // Mark user as logged in
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Redirect to a member-only page
    }, 2000);
  } else {
    showFeedback("Invalid email or password.", "red");
  }
});

// Function to display feedback messages
function showFeedback(message, color = "black") {
  feedback.textContent = message;
  feedback.style.color = color;
}
