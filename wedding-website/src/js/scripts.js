// filepath: /wedding-website/wedding-website/src/js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation for the contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Example of dynamic content updates for the homepage
    const eventDate = new Date('2023-06-15'); // Set your wedding date here
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const updateCountdown = () => {
            const now = new Date();
            const timeRemaining = eventDate - now;

            if (timeRemaining <= 0) {
                countdownElement.innerHTML = 'The wedding has already taken place!';
                clearInterval(countdownInterval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }
});