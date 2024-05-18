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