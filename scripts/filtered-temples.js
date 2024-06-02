const date = new Date();
let year = date.getFullYear;
document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
// declare the varialble for ham menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navMenu');
// using the ham menu to open an d close
hamButton.addEventListener('click', ()=>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls Idaho",
        dedicated: "1945, September 23",
        area: 90000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/7-Idaho-Falls-Temple-1375367.jpg"
    },
    {
        templeName: "Pocatello Idaho",
        location: "Pocatello Idaho",
        dedicated: "2021, Novemeber 7",
        area: 71125,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pocatello-idaho/400x250/pocatello-idaho-temple-open-house.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City Utah",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x225/NorthBirdsEye.jpg"
    }
  ];
 

//  naming variebles and calling them from html like buttons
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');
const homeLink = document.querySelector('#home');
 
// function to filter and get oinly old temples
function getOldTemples() {
  let filteredTemples = temples.filter(temple => {
  const dedicatedDate = new Date(temple.dedicated);
  const year1900 = new Date('1900-01-01');
  return dedicatedDate <= year1900;
  });
  return filteredTemples;
}
// function to filter and get only new temples
function getNewTemples() {
  let filteredTemples = temples.filter(temple => {
  const dedicatedDate = new Date(temple.dedicated);
  const year2000 = new Date('2000-01-01');
  return dedicatedDate >= year2000;
  });
  return filteredTemples;
}

// function that checks the area of temples and returns ones bigger then 90000
function getLargeTemples() {
  let filteredTemples = temples.filter(temple => temple.area >= 90000);
  return filteredTemples;
}

// function that checks that area of temples and returns ones that are smaller than 10000
function getSmallTemples() {
  let filteredTemples = temples.filter(temples => temples.area <= 10000);
  return filteredTemples;
}


// assigning variable names to the different functions
const oldTemples = getOldTemples()
const newTemples = getNewTemples()
const largeTemples = getLargeTemples()
const smallTemples = getSmallTemples()
// event listener that populates things for old temple
oldLink.addEventListener('click', () => {
  createTempleCard(oldTemples);
});
 
// event lsitener that populates everything for new temples
newLink.addEventListener('click', () => {
  createTempleCard(newTemples);
});

// event listener that populates large temples
largeLink.addEventListener('click', () => {
  createTempleCard(largeTemples)
})

// event listener that populates small temples
smallLink.addEventListener('click', () => {
  createTempleCard(smallTemples)
})

// event lsitener for when you hit home/populate full list
homeLink.addEventListener('click', () => {
  createTempleCard(temples)
})



// function thaqt actually creates the temple cards
function createTempleCard(filteredTemples) {
  document.querySelector('.templeCard').innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let container = document.createElement('div')
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');
 
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(container)
        container.appendChild(name);
        container.appendChild(location);
        container.appendChild(dedication);
        container.appendChild(area);
        card.appendChild(img);
 
        document.querySelector('.templeCard').appendChild(card);
    });
};