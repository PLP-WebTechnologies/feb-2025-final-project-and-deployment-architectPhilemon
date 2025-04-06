document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
        const email = form.querySelector("input[type='email']");
        if (!email.value.includes("@")) {
            e.preventDefault();
            alert("Please enter a valid email address.");
        }
    });
});