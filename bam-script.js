const form = document.getElementById("signup-form");
const feedback = document.createElement("p"); // Create a feedback message element
form.appendChild(feedback); // Add it to the form

// Check if a user is already stored in localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const storedUser = JSON.parse(localStorage.getItem("member"));
  if (storedUser) {
    showFeedback(`Welcome back, ${storedUser.firstName}!`, "green");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    firstName: form["first-name"].value.trim(),
    lastName: form["last-name"].value.trim(),
    pronouns: form["pronouns"].value.trim(),
    email: form.email.value.trim(),
    password: form.password.value.trim(), // Note: Do not store real passwords this way in a real app!
  };

  // Validation: Ensure all fields are filled
  if (!user.firstName || !user.lastName || !user.pronouns || !user.email || !user.password) {
    showFeedback("All fields are required!", "red");
    return;
  }

  if (user.password.length < 6) {
    showFeedback("Password must be at least 6 characters long.", "red");
    return;
  }

  // Store user data in localStorage
  localStorage.setItem("member", JSON.stringify(user));

  // Show success message
  showFeedback(`Welcome, ${user.firstName}! Your account has been created.`, "green");

  // Reset form fields
  form.reset();
});

// Function to display feedback messages
function showFeedback(message, color = "black") {
  feedback.textContent = message;
  feedback.style.color = color;
}
