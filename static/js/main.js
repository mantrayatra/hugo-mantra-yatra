$(function(){
  carousels();
  navbar();
  smoothScroll($(".navbar").height());
});

function navbar() {
  navbarScrollHandler();
  navbarCollapseOnClick();
  navBarBlackOnClickOfHamburgerIcon();
  navBarCollapseOnClickOutside();
}

function navBarCollapseOnClickOutside() {
  $(":not(nav)").click(function() {
    collapseNavBar();
  });
}

function carousels() {
  $("#testimonial-carousel").owlCarousel({
    autoPlay: true,
    pagination: true,
    singleItem: true
  });

  $("#hero-carousel").owlCarousel({
    pagination: false,
    singleItem: true
  });

}

function navbarScrollHandler() {
  $(document).scroll(function() {
     navbarCollapseAndToggleState();
  });
}

function navbarCollapseAndToggleState() {
  collapseNavBar();
  toggleStateOfNavBarBasedOnScrollPosition();
}

function toggleStateOfNavBarBasedOnScrollPosition() {
  var scroll_start = 0;
  var startchange = $('.startchange');
  var offset = startchange.offset();
  if (startchange.length) {
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top) {
        makeNavBarBlack();
      } else {
        makeNavBarTransparent();
      }
  }
}

function makeNavBarBlack() {
  $('.navbar').addClass('navbar-inverse')
             .css('background-color', '#000000');
}

function makeNavBarTransparent() {
  $('.navbar').removeClass('navbar-inverse')
              .css('background-color', 'transparent');
}

function smoothScroll(navSize) {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - navSize
        }, 1000);
        return false;
      }
    }
  });
}

function navbarCollapseOnClick() {
   $(".navbar-nav li a").click(function() {
     collapseNavBar();
   });
}

function navBarBlackOnClickOfHamburgerIcon() {
  $(".navbar-toggle").click(function() {
    console.log("im d9ing");
    makeNavBarBlack();
  });
}

function collapseNavBar() {
  // check if window is small enough so dropdown is created
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse('hide');
  }
}
