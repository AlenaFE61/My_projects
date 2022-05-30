// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

    jQuery('.icon-humburher').click(function(){
      jQuery('.nav-menu').show("slow");
    });
    
    jQuery('.closed').click(function(){
      jQuery('.nav-menu').hide("slow");
    });

	let slid = jQuery('#review-carousel');
		
	slid.owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
        dots: true,
				mouseDrag: true
			},
			767:{
				items: 2,
        dots: true,
				mouseDrag: true
			},
			991:{
				items: 4,
        dots: true,
				mouseDrag: true
			},
			1099:{
				items: 4,
        dots: true,
				mouseDrag: true
			}
		}
	});
	
	});