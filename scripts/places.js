// get the date and last modified for the footer
const date = new Date();
let year = date.getFullYear;
document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
// populate the weather and such but it will just be static for now
function calculateWindChill(wind, temp) {
    if (wind <= 4.8 || temp > 10){
        return "N/A"
    }
    const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    return windChill;
}
const wind = 35; //km/h
const temp = 9;  //Cel
const windChill = calculateWindChill(wind, temp);
document.getElementById("windChill").innerHTML = `${windChill.toFixed(1)}°C`