document.addEventListener('DOMContentLoaded', function () {
    // Fade-in animation
    const form = document.getElementById("signin-form");
    form.classList.add("opacity-100");
  
    // Password toggle
    const togglePassword = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");
  
    togglePassword.addEventListener("click", function () {
        const icon = document.getElementById("eye-icon");
      
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
              d="M2.458 12C3.732 7.943 7.523 5 12 5
                 c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7
                 -4.477 0-8.268-2.943-9.542-7z" />`;
        }
      });           
  
    // Handle form submission
    const signinForm = document.querySelector("form");
    const signinButton = document.getElementById("signin-button");
  
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Visual feedback
      signinButton.setAttribute("disabled", "true");
      signinButton.classList.add("bg-pink-400");
      signinButton.classList.remove("hover:bg-pink-600");
  
      // Simulate backend call
      setTimeout(() => {
        window.location.href = "/dashboard";  // Replace with real route
      }, 2000);
    });
  });
  