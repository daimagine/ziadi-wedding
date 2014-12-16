
/*global $:false */
/*global jQuery:false*/
/*jshint unused: vars */
/*jshint unused: false */
/*jshint -W031 */
/*global gnMenu */
/*exported jQuery */


/* -- NAVIGATION -- */
jQuery('.gn-menu a').on('click');
	new gnMenu( document.getElementById( 'gn-menu' ) );

	
/* -- SCROLLING -- */
jQuery('body').scrollspy({ target: '#gn-menu' });


/* -- SLIDESHOW -- */
$(function() {
	cbpBGSlideshow.init();
});	


/* -- PARALLAX EFFECT SETTINGS -- */
$(document).ready(function() {
	"use strict";
    $('body').localScroll({
        target:'#content'
    });   
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#home').parallax("50%", 0);
	$('#story').parallax("50%", 0);
	$('#timer').parallax("50%", 0);	
	$('#about').parallax("50%", 0);
	$('#events').parallax("50%", 0);
	$('#wedding').parallax("50%", 0);
	$('#album').parallax("50%", 0);
	$('#rsvp').parallax("50%", 0);
	$('#form').parallax("50%", 0);
});


/* -- TIMER -- */
$(document).ready(function(){
       "use strict";
		$("#countdown").countdown({
			date: "28 december 2014 08:00:00", // changes the launch date
			format: "on"
	},
			
	function() {
		// callback function
	});
});


/* -- WEDDING CEREMONY SLIDESHOW -- */
// You can also use "$(window).load(function() {"
$(function () {
      // Slideshow
      $("#slider").responsiveSlides({
        auto: true,
        nav: true,
        speed: 500,
        maxwidth: 800,
        namespace: "large-btns"
      });
});


/* -- ALBUM -- */
// [].slice.call( document.querySelectorAll( '.photostack' ) ).forEach( function( el ) { new Photostack( el ); } );
new Photostack( document.getElementById( 'photostack' ), {
	callback : function( item ) {
		//console.log(item)
	}
});
	

/* -- PRETTY PHOTO -- */
$(document).ready(function(){
	"use strict";
    $("a[data-rel^='prettyPhoto']").prettyPhoto();
});


/* -- WEDDING PARTY CAROUSEL -- */
$(document).ready(function() {
	$("#party-carousel").owlCarousel({  
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
	});
});


/* -- ELEMENTS ANIMATION ON SCROLL -- */
$(window).scroll(function () {
	"use strict";
    var topOfWindow = $(window).scrollTop();

    function _checkOffset(className) {
        return function () {
            var $this = $(this),
                imagePos = $this.offset().top;

            $this.toggleClass(className, (imagePos < topOfWindow + 900));
        };
    }

	$('.story-content').each(_checkOffset('animated fadeInUp'));
	$('ul#countdown').each(_checkOffset('animated fadeInUp'));
	$('.timer-text').each(_checkOffset('animated fadeIn'));
	$('#parents').each(_checkOffset('animated fadeIn'));
	$('#godfathers').each(_checkOffset('animated fadeIn'));
	$('#maids').each(_checkOffset('animated fadeIn'));
	$('.events h2').each(_checkOffset('animated fadeIn'));
	$('.events-button').each(_checkOffset('animated fadeIn'));
	$('#ceremony').each(_checkOffset('animated fadeIn'));
	$('#party').each(_checkOffset('animated fadeIn'));
	$('.registry-text h2').each(_checkOffset('animated fadeIn'));
	$('.registry-logos').each(_checkOffset('animated fadeIn'));
	$('#album').each(_checkOffset('animated fadeIn'));	
	$('.rsvp-text h2').each(_checkOffset('animated fadeIn'));	
	$('.rsvp-text p').each(_checkOffset('animated fadeIn'));
	$('#form').each(_checkOffset('animated fadeIn'));	
});


/* -- GOOGLE MAP -- */
window.onload = function () {
	"use strict";
	var styles = [
		{
			featureType: 'water', // set the water color
			elementType: 'geometry.fill', // apply the color only to the fill
			stylers: [
				{ color: '#FFF' }
			]
		},{
			featureType: 'landscape.natural', // set the natural landscape
			elementType: 'all',
			stylers: [
				{ hue: '#D3CEC2' },
				{ lightness: 25}
			]
		},{
			featureType: 'poi', // set the point of interest
			elementType: 'geometry',
			stylers: [
				{ hue: '#D65679' },
				{ lightness: 30 }
			]
		},{
			featureType: 'road', // set the road
			elementType: 'geometry',
			stylers: [
				{ hue: '#D65679' },
				{ lightness: 30 }
			]
		},{
			featureType: 'road.local', // set the local road
			elementType: 'all',
			stylers: [
				{ hue: '#FFF' },
				{ saturation: 5 },
				{ lightness: 10 }
			]
		}
	];

	var myLatlng = new google.maps.LatLng(-6.425122,106.848002,17);
	var options = {
		mapTypeControlOptions: {
			mapTypeIds: ['Styled']
		},
		center: myLatlng,
		zoom: 15,
		disableDefaultUI: false,	
		mapTypeId: 'Styled'
	};
	var div = document.getElementById('location');
	var map = new google.maps.Map(div, options);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
	map.mapTypes.set('Styled', styledMapType);

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'Wedding Party',
	    url: 'https://www.google.co.id/maps/place/Kecamatan+Cilodong/@-6.425122,106.848002,17z/data=!3m1!4b1!4m2!3m1!1s0x2e69ea4c0d6be8e1:0x13693ffebbb96901?hl=en'
	});

	google.maps.event.addListener(marker, 'click', function() {
	    var win = window.open(this.url, '_blank');
  		win.focus();
	});

	var myLatlngMosque = new google.maps.LatLng(-6.43592,106.84967,17);
	var optionsMosque = {
		mapTypeControlOptions: {
			mapTypeIds: ['Styled']
		},
		center: myLatlngMosque,
		zoom: 18,
		disableDefaultUI: false,	
		mapTypeId: 'Styled'
	};
	var divMosque = document.getElementById('location-mosque');
	var mapMosque = new google.maps.Map(divMosque, optionsMosque);
	mapMosque.mapTypes.set('Styled', styledMapType);

	var markerMosque = new google.maps.Marker({
	    position: myLatlngMosque,
	    map: mapMosque,
	    title: 'Wedding Ceremony',
	    url: 'https://www.google.co.id/maps/place/Masjid+Jami+Attaqwa/@-6.43592,106.84967,17z/data=!3m1!4b1!4m2!3m1!1s0x2e69ea447ac411bd:0xce8953d3a23e2bde?hl=en'
	});

	google.maps.event.addListener(markerMosque, 'click', function() {
	    var win = window.open(this.url, '_blank');
  		win.focus();
	});

	$("#rsvp-slider").responsiveSlides({
        auto: true,
        nav: true,
        speed: 250,
        namespace: "rsvp-slider-btns"
    });
};  
