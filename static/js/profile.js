
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const submitBtn = document.getElementById('submitBtn');
    const loadingGif = document.getElementById('loadingGif');
  
    form.addEventListener('submit', (e) => {
        submitBtn.style.display = 'none';  // hides the button
        e.preventDefault(); // stop immediate submit to show gif first
  
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
  
      loadingGif.classList.remove('hidden');
  
      setTimeout(() => {
        form.submit();
      }, 2000);
    });



document.querySelectorAll('.gender-toggle').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.gender-toggle').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        document.getElementById('genderInput').value = button.dataset.gender;
    });
});

// Initialize Flatpickr on #dobInput
flatpickr("#dobInput", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    defaultDate: "today",
    // Optional: add animation on open
    onOpen: () => {
      console.log("Flatpickr calendar opened");
    }
  });
  
  // Modal open/close logic
  const dobModal = document.getElementById('dobModal');
  const openBtn = document.getElementById('openDobModalBtn');
  const closeBtn = document.getElementById('closeModal');
  
  openBtn.addEventListener('click', () => {
    dobModal.classList.remove('hidden');
    dobModal.style.opacity = 0;
    // Fade in
    let opacity = 0;
    const fadeIn = setInterval(() => {
      if (opacity >= 1) clearInterval(fadeIn);
      opacity += 0.1;
      dobModal.style.opacity = opacity;
    }, 30);
  });
  
  closeBtn.addEventListener('click', () => {
    // Fade out
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOut);
        dobModal.classList.add('hidden');
      }
      opacity -= 0.1;
      dobModal.style.opacity = opacity;
    }, 30);
  });
  
  // Optional: click outside modal content closes modal
  dobModal.addEventListener('click', e => {
    if (e.target === dobModal) {
      closeBtn.click();
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const dobModal = document.getElementById('dobModal');
    const openBtn = document.getElementById('openDobModalBtn');
    const closeBtn = document.getElementById('closeModal');
    const flatpickrInput = document.getElementById('flatpickrDob');
    const dobInputHidden = document.getElementById('dobInput');
  
    // Initialize Flatpickr on modal input
    const fp = flatpickr(flatpickrInput, {
      dateFormat: "Y-m-d",
      maxDate: "today",
      onChange: function(selectedDates, dateStr) {
        dobInputHidden.value = dateStr;            // Set hidden input value for form
        openBtn.textContent = dateStr;              // Show selected date on button
        closeModal();
      }
    });
  
    function openModal() {
      dobModal.classList.remove('hidden');
      dobModal.style.opacity = 0;
      let opacity = 0;
      const fadeIn = setInterval(() => {
        if (opacity >= 1) clearInterval(fadeIn);
        opacity += 0.1;
        dobModal.style.opacity = opacity;
      }, 30);
    }
  
    function closeModal() {
      let opacity = 1;
      const fadeOut = setInterval(() => {
        if (opacity <= 0) {
          clearInterval(fadeOut);
          dobModal.classList.add('hidden');
        }
        opacity -= 0.1;
        dobModal.style.opacity = opacity;
      }, 30);
    }
  
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
  
    // Close if click outside modal content
    dobModal.addEventListener('click', e => {
      if (e.target === dobModal) {
        closeModal();
      }
    });
  });
})