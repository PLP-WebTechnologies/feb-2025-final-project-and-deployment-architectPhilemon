// Show/hide inspiration message
function toggleMessage() {
  const text = document.getElementById("surpriseText");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

// Contact form response
function submitForm(event) {
  event.preventDefault();
  document.getElementById("formResponse").textContent = "Thanks! Let's build something amazing.";
}

// Newsletter
function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  document.getElementById("newsletterMsg").textContent = `Subscribed as ${email}. Welcome to the design collective.`;
}

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Filter blog posts
function filterPosts() {
  const input = document.getElementById("postSearch").value.toLowerCase();
  const articles = document.querySelectorAll("#posts article");
  articles.forEach(article => {
    const title = article.querySelector("h3").textContent.toLowerCase();
    article.style.display = title.includes(input) ? "block" : "none";
  });
}

// Image slider logic
let currentSlide = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const width = slider.clientWidth / totalSlides;
  slider.style.transform = `translateX(-${currentSlide * width}px)`;
}
