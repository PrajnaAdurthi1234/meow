$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
function showCustomAlert() {
    event.preventDefault(); // Prevent form submission

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Create custom alert box
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerHTML = `
        <h2>Thank You!Hr sir/madam</h2>
        <p>It's just a demo to show that I have good knowledge in webpage development.</p>
        <button class="clock-button" onclick="closeCustomAlert()">⏰ Close</button>
    `;
    document.body.appendChild(alertBox);

    // Display overlay and alert box
    overlay.style.display = 'block';
    alertBox.style.display = 'block';
}

function closeCustomAlert() {
    const overlay = document.querySelector('.overlay');
    const alertBox = document.querySelector('.custom-alert');

    // Remove overlay and alert box
    if (overlay) overlay.remove();
    if (alertBox) alertBox.remove();
}