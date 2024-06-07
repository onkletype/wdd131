document.addEventListener('DOMContentLoaded', function() {
    // Get money element
    const moneyElement = document.querySelector('.money');

    // Get all slider buttons
    const buttons = document.querySelectorAll('.slider-button');

    // Loop through each button and add click event listener
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the value of the button
            const value = parseInt(button.getAttribute('data-value'));

            // Update the money value
            moneyElement.textContent = value + '$';
        });
    });
});