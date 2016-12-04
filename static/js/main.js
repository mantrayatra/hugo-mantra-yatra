$(function(){
  carousels();
  navbarScrollHandler();
  smoothScroll($(".navbar").height());
  navbarCollapseOnClick();
});

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
  var scroll_start = 0;
  var startchange = $('.startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('.navbar').addClass('navbar-inverse')
                      .css('background-color', '#000000');
        } else {
          $('.navbar').removeClass('navbar-inverse')
                      .css('background-color', 'transparent');
        }
    });
  }
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
   $(".navbar-nav li a").click(function (event) {
     // check if window is small enough so dropdown is created
     var toggle = $(".navbar-toggle").is(":visible");
     if (toggle) {
       $(".navbar-collapse").collapse('hide');
     }
   });
}
