r// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select the form
    const form = document.getElementById("signup-form");
  
    // Add event listener for form submission
    form.addEventListener("submit", (event) => {
      // Prevent default form submission
      event.preventDefault();
  
      // Collect form data
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const pronouns = document.getElementById("pronouns").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Validate data (basic example)
      if (!firstName || !lastName || !email || !password) {
        alert("Please fill out all required fields.");
        return;
      }
  
      // Mock account creation
      const newUser = {
        firstName,
        lastName,
        pronouns,
        email,
        password,
      };
  
      // Store user information (in real apps, send it to a server securely)
      console.log("New Member:", newUser);
  
      // Show a success message
      alert(`Welcome, ${firstName}! Happy Reading!`);
  
      // Clear the form
      form.reset();
    });
  });
  