// Disable manual scrolling (mouse, keyboard, and touch)
function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
  // Listen to scroll, wheel, touch, and keyboard events
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp') {
      preventScroll(e);
    }
  }, { passive: false });
  
  // Enable scroll on each 'Next' and 'Back' button press
  function goToNext(button) {
    const section = button.closest('section');
    const input = section.querySelector('input:required, input[type="radio"]:required');
  
    if (input) {
      if (input.type === 'radio') {
        const checked = section.querySelector('input[type="radio"]:checked');
        if (!checked) {
          alert('Please select an option.');
          return;
        }
      } else if (!input.value.trim()) {
        alert('Please fill out this field.');
        return;
      }
    }
  
    section.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
  }
  
  function goToBack(button) {
    const section = button.closest('section');
    section.previousElementSibling?.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Enable form submission and alert
  document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Profile submitted! You can hook this to your backend.');
  });
  