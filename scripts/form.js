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
  const productList = document.getElementById('product_names');
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      productList.appendChild(option);
  });
}
let select = document.getElementById('product_names')
select.addEventListener('click', createProductList(products))


function addToCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
}

const counter = addToCounter();
const counterValueElement = document.getElementById('counterValue');
const Submitbutton = document.getElementById('button')

Submitbutton.addEventListener('click', function() {
    const newCount = counter();
    counterValueElement.textContent = newCount;
});
