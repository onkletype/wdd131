// Function to handle click event on image inside custom object div
function handleImageClick(event) {
    // Get the value associated with the clicked image
    let value = parseInt(event.target.getAttribute('data-value'));
    
    // Get the current total from local storage or initialize it to 5
    let total = parseInt(localStorage.getItem('total')) || 5;
    
    // Add the value of the clicked image to the total
    total += value;
    
    // Save the updated total to local storage
    localStorage.setItem('total', total);
    
    // Display the total in the HTML
    document.getElementById('total').textContent = '$' + total;
}

// Get all images inside divs with class "custom_object"
const images = document.querySelectorAll('.custom_object img');

// Attach event listeners to each image
images.forEach(img => {
    img.addEventListener('click', handleImageClick);
});

