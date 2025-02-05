document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    // Retrieve user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      alert(`Welcome back, ${storedUser.firstName}!`);
      window.location.href = "account.html"; // Redirect after successful login
    } else {
      alert("Invalid email or password. Please try again.");
    }

    loginForm.reset();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const returnHomeButton = document.getElementById("return-home");

  returnHomeButton.addEventListener("click", (event) => {
    event.preventDefault();
    returnHomeButton.classList.add("clicked"); // Add bounce animation class

    setTimeout(() => {
      window.location.href = "home.html"; // Navigate home after animation
    }, 300); // Match the animation duration
  });
});
