// Preloader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1500); // Adjust timeout as needed
});

// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
    
    // ARIA attributes for accessibility
    const isActive = navLinks.classList.contains('active');
    this.setAttribute('aria-expanded', isActive);
    navLinks.setAttribute('aria-hidden', !isActive);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the top of the section
        });
    });
});

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic form validation with regex for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Here you would usually send the form data to a server
    // For demo purposes, we'll just log the data
    console.log({
        name: name,
        email: email,
        message: message
    });

    // Form submission success animation
    const form = document.getElementById('contact-form');
    form.innerHTML = '<p class="success-message">Thank you for your message!</p>';

    // Clear form fields after animation
    setTimeout(() => {
        form.reset();
    }, 2000); // Delay to allow the animation to be seen
});

// Smooth Scroll to Top Button (Optional)
const scrollToTopButton = document.getElementById('scroll-to-top');

if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
}
