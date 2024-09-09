/* Web Developer Triss Marsh (https://github.com/distriss) 
	// Nav // Accordion // Map // Prevent Default
*/ 





(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);






// Nav Hamburger

const navigation = document.getElementById('nav')
const menu = document.getElementById('menu')

menu.addEventListener('click', () => { 
  navigation.style.setProperty('--childrenNumber', navigation.children.length)
  navigation.classList.toggle('active')
  menu.classList.toggle('active')
});


// Navbar scroll offset
let lastScrollTop
navbar = document.getElementById('navbar')
window.addEventListener('scroll',function(){
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-100px'
navigation.classList.remove('active')
menu.classList.remove('active')
}
else{
navbar.style.top='0'
}
lastScrollTop = scrollTop
})

// Accordion

const panelPar = document.getElementsByClassName("panel-par")
const accordion = document.getElementsByClassName("accordion")

Array.from(accordion).forEach(element => element.addEventListener('click', function() {	
	this.classList.toggle('active-acc')
	
	let panel = this.nextElementSibling
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null
	} else {
		panel.style.maxHeight = panel.scrollHeight + 'px'
	} panel.classList.toggle('transition')
}))


// Prevent Default

const bacp = document.querySelectorAll('.bacp-logo')

Array.from(bacp).forEach(e => e.addEventListener('contextmenu', e => e.preventDefault()))


// Map

	const locations = [
		["Lotus Therapy Center", 53.140442395542756, -1.1958635372977526],
		["Being Psychotherapy", 52.92426570681056, -1.4902154740111735]
	];

	// map initialization - and address cordinates
	const map = L.map('map').setView([53.042255229863876, -1.3158058748407906], 10)
	
	//osm layer
	const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		
	});
	
	osm.addTo(map)
	

	// map markers	and popups

	for (let i = 0; i < locations.length; i++) {
		marker = new L.Marker([locations[i][1], locations[i][2]])
		.bindPopup(locations[i][0])
		.addTo(map)
		.on('click', function() {
			map.setView([locations[i][1], locations[i][2]], 15)
		});

	}

	
	// // leaflet handlers
	// map.scrollWheelZoom.disable()
	// map.dragging.disable()

	
// copyright current year

const copyrightYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = copyrightYear;
	
