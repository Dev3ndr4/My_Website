
// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


// Form Submiting
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Enter Email"]').value;
    const message = document.querySelector('textarea#comment').value;

    // Format the message for WhatsApp
    const whatsappMessage = `New message via contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Update the Woowa link with the formatted message
    const woowaLink = form.action; // Get the base Woowa link
    const updatedLink = `${woowaLink}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to the updated link
    window.location.href = updatedLink;
});


// Hire Me Button (Same Woowa Link)
const hireMeButton = document.querySelector('.section-sm a');
hireMeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const whatsappMessage = "Hi, Dev!! I'd like to discuss hiring you!"; // Customizable message
    const woowaLink = hireMeButton.href;
    const updatedLink = `${woowaLink}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = updatedLink;
});

document.addEventListener("mousemove", (event) => {
    const ghostElements = document.querySelectorAll(".ghost");
    const scrollX = window.scrollX || window.pageXOffset; // Get horizontal scroll position
    const scrollY = window.scrollY || window.pageYOffset; // Get vertical scroll position

    for (const ghost of ghostElements) {
        ghost.style.left = event.clientX + scrollX + "px"; // Adjust for scroll
        ghost.style.top = event.clientY + scrollY + "px";  // Adjust for scroll
    }
});

