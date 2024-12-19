let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Show the first slide by default
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    // Optionally, auto-change slides every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});

//Contacts
// Add form validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting immediately

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Thank you for reaching out! We’ll get back to you soon.");
    this.reset(); // Clear the form
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




