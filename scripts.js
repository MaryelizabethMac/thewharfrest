document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const name1Input = document.getElementById("name1");
    const emailInput = document.getElementById("email");
    const comment1Input = document.getElementById("comment1");
    form.addEventListener("submit", function (event) {
        // Initialize an array to store error messages
        const errors = [];
        // Validation for username (minimum length of 6 characters)
        if (name1Input.value.length < 6) {
        errors.push("Username must be at least 3 characters long.");
        }
        // Validation for email (must be a valid email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
        errors.push("Please enter a valid email address.");
        }
        // Validation for password (minimum length of 20 characters)
        if (comment1Input.value.length < 20) {
        errors.push("Comment must be at least 20 characters long.");
        }
        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        alert(errors.join("\n")); // Display error messages in an alert
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("review-form");
    const name2Input = document.getElementById("name2");
    const review2Input = document.getElementById("review2");
    form.addEventListener("submit", function (event) {
        // Initialize an array to store error messages
        const errors = [];
        // Validation for username (minimum length of 6 characters)
        if (name2Input.value.length < 6) {
        errors.push("Username must be at least 3 characters long.");
        }
        // Validation for review (minimum length of 20 characters)
        if (review2Input.value.length < 20) {
        errors.push("Review must be at least 20 characters long.");
        }
        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        alert(errors.join("\n")); // Display error messages in an alert
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Social Media Sharing Functions
    function shareOnFacebook() {
    // Replace 'your-website-url' with the URL you want to share
    const urlToShare = 'https://maryelizabethmac.github.io/thewharfrest/index.html';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    }
    function shareOnTwitter() {
    // Replace 'your-website-url' and 'your-text' with your desired URL and text
    const urlToShare = 'https://maryelizabethmac.github.io/thewharfrest/index.html';
    const textToShare = 'Look a this restaurant called The Wharf';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    }
    function shareOnInstagram() {
        // Replace 'your-website-url' with the URL you want to share
        const urlToShare = 'https://maryelizabethmac.github.io/thewharfrest/index.html';
        const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(urlToShare)}`;
        window.open(instagramShareUrl, 'Share on Instagram', 'width=600,height=400');
    }
    
    // Event listeners for social media sharing buttons
    const shareFacebookButton = document.getElementById("share-facebook");
    const shareTwitterButton = document.getElementById("share-twitter");
    const shareInstagramButton = document.getElementById("share-instagram");
    shareFacebookButton.addEventListener("click", shareOnFacebook);
    shareTwitterButton.addEventListener("click", shareOnTwitter);
    shareInstagramButton.addEventListener("click", shareOnInstagram);
});

