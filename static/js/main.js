$(function(){
  carousels();
  navbar();
  smoothScroll($('.navbar').height());
  tabs();
  auth();
  forms();
  images();
});

function images() {
  $("img")
    .addClass("img-responsive")
    .css("padding-bottom", "1em");
}

function forms() {
  $(document).on('submit', 'form.ajaxform', function(e) {
        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            dataType: 'json',
            data    : $(this).serialize(),
            success : function( data ) {
                e.currentTarget.reset();
            },
            error   : function( xhr, err ) {
                alert('Error');
            }
        });
        return false;
    });
}

function tabs() {
  $('#login-tabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });
}

function auth() {
  $('.review-form').click(function(e) {
    var loggedInUser = firebase.auth().currentUser;
    if(! loggedInUser ) {
      location.href = "/login.html?next=" + location.pathname;
    }
  });
}

function navbar() {
  navbarScrollHandler();
  navbarCollapseOnClick();
  navBarBlackOnClickOfHamburgerIcon();
  navBarCollapseOnClickOutside();
}

function navBarCollapseOnClickOutside() {
  $(':not(nav)').click(function() {
    collapseNavBar();
  });
}

function carousels() {
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1
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
   $('.navbar-nav li a').click(function() {
     collapseNavBar();
   });
}

function navBarBlackOnClickOfHamburgerIcon() {
  $('.navbar-toggle').click(function() {
    makeNavBarBlack();
  });
}

function collapseNavBar() {
  // check if window is small enough so dropdown is created
  var toggle = $('.navbar-toggle').is(':visible');
  if (toggle) {
    $('.navbar-collapse').collapse('hide');
  }
}
