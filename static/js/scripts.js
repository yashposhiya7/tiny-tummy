// Intersection Observer for scroll animations
const elements = document.querySelectorAll('.opacity-0');
const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100');
      entry.target.classList.remove('opacity-0');
      entry.target.classList.add('translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, options);

elements.forEach(element => {
  observer.observe(element);
});

// Testimonial slider logic
let currentIndex = 0;
const slider = document.getElementById('testimonial-slider');
const totalSlides = slider.children.length;

function updateSlider() {
  const offset = currentIndex * slider.clientWidth; // Adjust to the width of a single testimonial slide
  slider.style.transform = `translateX(-${offset}px)`; // Slide testimonials
}

// Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
  updateSlider();
}, 5000);

// Manual navigation functions
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Next slide
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Previous slide
  updateSlider();
}
