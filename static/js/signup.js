document.addEventListener('DOMContentLoaded', function () {
    // Form fade-in
    const form = document.getElementById("signup-form");
    form.classList.add("opacity-100");
  
    // Password toggle visibility
    const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");
  const icon = document.getElementById("eye-icon");

  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7
             a9.99 9.99 0 012.387-4.043M9.88 9.88a3 3 0 104.243 4.243" />
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0L3 3" />`;
    } else {
      passwordInput.type = "password";
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />`;
    }
  });
  
    // Handle form submission
    const formElement = document.querySelector("form");
    const signupButton = document.getElementById("signup-button");
    const buttonText = document.getElementById("signup-text");
  
    formElement.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission for now
      
      // Change the button color and disable it
      signupButton.setAttribute("disabled", "true");
      signupButton.classList.add("bg-pink-400");  // Change to lighter color to indicate loading
      signupButton.classList.remove("hover:bg-pink-600"); // Remove hover effect while loading
  
      // Simulate a backend request (you can replace this with actual AJAX)
      setTimeout(function () {
        // On success (after backend responds)
        signupButton.removeAttribute("disabled");
        signupButton.classList.remove("bg-pink-400");  // Revert color back to original
        signupButton.classList.add("bg-pink-500");  // Original color
  
        // You can redirect here or display a success message
        window.location.href = '/signin';
      }); // Simulating 3s delay
    });
  });
  