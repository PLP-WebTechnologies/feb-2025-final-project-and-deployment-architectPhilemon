// Add interactivity for the contact form
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        if (name && email && message) {
          alert(`Thank you, ${name}! Your message has been sent.`);
          contactForm.reset();
        } else {
          alert("Please fill out all fields before submitting.");
        }
      });
    }
  });