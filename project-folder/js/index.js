// Toggle Menu for Mobile
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Hide menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("show");
    });
});

// Toggle Dropdown Menu for Shop
function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = event.target.parentElement;
    dropdown.classList.toggle("show");
}

// Hide dropdown on link click inside dropdown
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', () => {
        const dropdown = document.getElementById("dropdownMenu");
        dropdown.classList.remove("show");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.matches(".drop-btn")) {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
});


document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const panel = button.nextElementSibling;

        // Toggle panel visibility
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const stats = document.querySelectorAll('.stat-card');

    const options = {
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = +stat.getAttribute('data-target');
                const numberElement = stat.querySelector('h1');
                animateCount(numberElement, target, 2000); // 2 seconds animation
                observer.unobserve(stat); // Stop observing after animation
            }
        });
    }, options);

    stats.forEach(stat => {
        observer.observe(stat);
    });

    function animateCount(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 50); // Update every 50ms

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(interval);
            }
            element.textContent = `${Math.round(start)}%`;
        }, 50);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('review-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const scrollAmount = 300; // Adjust the scroll amount as needed

    prevButton.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
