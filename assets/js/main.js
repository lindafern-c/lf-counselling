/* Web Developer Triss Marsh (distriss.github.io/portfolio) 
	// Nav // Accordion // Map // Prevent Default
*/ 

/* 
	Design by Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
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

	// map initialization - and address cordinates
	const map = L.map('map').setView([53.14115344089842, -1.1956592539777418], 15)
	
	//osm layer
	const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		
	});
	
	osm.addTo(map)
	
	// map marker
	const marker = L.marker([53.140442395542756, -1.1958635372977526])

	
	// marker popup
	const popup = marker.bindPopup("Lotus Therapy Centre").openPopup()
	popup.addTo(map)
	
	// leaflet handlers
	map.scrollWheelZoom.disable()
	map.dragging.disable()


	
