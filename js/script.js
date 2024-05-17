import { load } from "./components/progress_bar.js";

// Set up the observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            load();
            observer.unobserve(entry.target); // Optional: stop observing once loaded
        }
    });
}, {
    threshold: 0.1 // Adjust as needed
});

// Start observing the 'technologies' section
let techSection = document.querySelector('#technologies');
observer.observe(techSection);