<script>// script.js

    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', function () {
        // Show a welcome alert
        alert('Welcome to Little Taco Shop!');
    
        // Get all navigation links
        const navLinks = document.querySelectorAll('nav a');
    
        // Add click listeners to each nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();  // Prevent default link action
                console.log(`You clicked on: ${this.textContent.trim()}`);
                alert(`You clicked on: ${this.textContent.trim()}`);
            });
        });
    });
    </script>