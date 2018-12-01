"use strict";

$(window).on("load", function () {

   $('#status').fadeOut(2000);
   $('#preloader').delay(1500).fadeOut('slow');
});

/***
 * Team Section;
 ***/

$(function () {
   $("#team-members").owlCarousel({
      items: 2,
      autoplay: true,
      smartspeed: 500,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false
   });

});

/***
 * TEAM MEMBERS PROGRESS-BAR;
 ***/

$(function () {
   $('#progress-elements').waypoint(function () {

      $('.progress-bar').each(function () {
         $(this).animate({
               width: $(this).attr('aria-valuenow') + "%"
            }, 2000

         );
      });

      $(this).destroy();
   }, {
      offset: 'bottom-in-view'
   });
});

/***
 * RESPONSIVE TABS;
 ***/

$(function () {
   $('#services-tabs').responsiveTabs({
      animation: 'slide'
   });

});

/***
 * TESTIMONALS SILDER;
 ***/
$(function () {
   $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      smartspeed: 500,
      loop: false,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i ><</i>', '<i>></i>']
   });
});

/***
 * STATS COUNTER;
 ***/
$(function () {

   $('.counter-p').counterUp({
      delay: 10,
      time: 5000
   });
});

/***
 * CLIENT-COMPANY-SLIDER;
 ***/
$(function () {

   $("#client-list").owlCarousel({
      items: 5,
      autoplay: false,
      smartspeed: 500,
      loop: false,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i ><</i>', '<i>></i>']
   });

});

/***
 * SHOW AND HIDE NAVIGATION;
 ***/

$(function () {

   //Sow/hide on page load;
   showHideNav();
   
   // active on window scroll
   $(window).scroll(function () {
      
      showHideNav();
   });

   function showHideNav(){
      if ($(window).scrollTop() > 50) {
         // Show the White nav-bar
         $('nav').addClass('white-nav-top');
         // Show the dark log
         $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
         // Show the back to top
         $('.btn-back-to-top').fadeIn(2000);

      } else {
         // Show the Black nav-bar
         $('nav').removeClass('white-nav-top');
         // Show the normal log
        $('.navbar-brand img').attr('src', 'img/logo/logo.png');
        // Hide the back top to button
        $('.btn-back-to-top').fadeOut(1000);
      }
   }
});

/***
 * SMOOTH-SCROLLING -EFFECT:
 ***/

 $(function(){
    $('a.smooth-scroll').click(function(event){

      event.preventDefault();
           
      //get section id from the above clicked link href attribute etc
      var section_id = $(this).attr('href');

      $("html, body").animate({
         scrollTop:$(section_id).offset().top - 64
      }, 1250, "easeInOutExpo");


    })
 });
