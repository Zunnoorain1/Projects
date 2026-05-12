// Welcome Message
console.log("Welcome to Wheat & Meat");

// Simple input animation
const input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.placeholder = "Search delicious dishes...";
});

input.addEventListener("blur", () => {
    input.placeholder = "Explore Our Menu";
});

// Navigation click effect
const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        alert(link.textContent + " page is coming soon!");
    });
});