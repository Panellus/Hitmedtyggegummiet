function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


var map = L.map('map').setView([54.763238323879065, 11.849088443300081], 15.5);
     	
     	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);


    	
var binIkon = L.icon({
	iconUrl: "bin.png",
    iconSize: [30, 30], // size of the icon
   });

var skoleIkon = L.icon({
	iconUrl: "skole.png",
    iconSize: [30, 30], // size of the icon
   });

var marker1 = L.marker([54.758062539375, 11.847324317457371],{
 	title: "Første markør",
 	icon: binIkon


}).addTo(map).bindPopup("<h2>Eggertsvej (Brovejen)</h2> <p>0 stykker tyggegummi fundet</p>");
     	

var marker2 = L.marker([54.75924041448518, 11.854624364643795],{
    	
 title: "Anden markør",
 icon: binIkon

}).addTo(map).bindPopup("<h2>Foetex, Guldborgsundcentret 23</h2> <p>24 stykker tyggegummi fundet</p>");
     	



var marker3 = L.marker([54.7681646955022, 11.8544710011874],{
    	
 title: "Tredje markør",
 icon: binIkon

}).addTo(map).bindPopup("<h2>Sundby Alle 8</h2> <p>7 stykker tyggegummi fundet</p>");
     	
    

var marker4 = L.marker([54.765815480718416, 11.848311474328332],{
    	
 title: "Fjerde markør",
 icon: binIkon

}).addTo(map).bindPopup("<h2>Kildegaardsvej 11-1</h2> <p>11 stykker tyggegummi fundet</p>");

var skole = L.marker([54.762424083857454, 11.84473737165203],{
    	
 title: "Skolen",
 icon: skoleIkon

}).addTo(map).bindPopup("<h2>SUNDskolen</h2> <p>Projektuge: Hit Med Tyggegummiet</p>");



     	
var circle = L.circle([54.758062539375, 11.847324317457371], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.3,
    radius: 30
}).addTo(map);


var circle = L.circle([54.75924041448518, 11.854624364643795], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.3,
    radius: 30
}).addTo(map);

var circle = L.circle([54.7681646955022, 11.8544710011874], {
    color: '#FEEE28',
    fillColor: '#FEEE28',
    fillOpacity: 0.3,
    radius: 30
}).addTo(map);

var circle = L.circle([54.765815480718416, 11.848311474328332], {
    color: '#FEAD28',
    fillColor: '#FEAD28',
    fillOpacity: 0.3,
    radius: 30
}).addTo(map);
