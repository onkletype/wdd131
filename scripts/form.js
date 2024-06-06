const date = new Date();
let year = date.getFullYear;
document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;




const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  }
];


// in my function I want to have it populate an option tag and then append the option tag to the section. I also want it to be pulled from the array


function createProductList(products) {
  // Assuming there's a <select> element with id="productList"
  const productList = document.getElementById('product_names');

  // Iterate over the products array
  products.forEach(product => {
      // Create a new option element
      const option = document.createElement('option');
      // Set the value and text content of the option element
      option.value = product.name;
      option.textContent = product.name;
      // Append the option element to the select element
      productList.appendChild(option);
  });
}
let select = document.getElementById('product_names')
select.addEventListener('click', createProductList(products))


// Load the counter value from localStorage if available, or initialize it to 0
let counter = localStorage.getItem('') || 0;

// Display the current counter value on the webpage
document.getElementById('counter').textContent = counter;

// Increment the counter value
counter++;

// Update the counter value in localStorage
localStorage.setItem('review.html', counter);
