// Event listener for the "See All" button
document.querySelector(".see-all").addEventListener("click", function() {
    alert("More creations coming soon!");
});

// Mobile Menu Toggle (Optional)
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰"; // Hamburger icon

document.querySelector("nav").appendChild(menuToggle);

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Add hover effect for gallery items
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseover", function() {
        this.style.opacity = "0.8";
    });

    card.addEventListener("mouseleave", function() {
        this.style.opacity = "1";
    });
});
