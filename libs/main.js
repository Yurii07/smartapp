$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: false, pause: "hover"});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });


$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 100) {
      $("nav").css('background-color', 'rgba(172, 223, 192,0.5)');
    } else {
      $("nav").css('background-color', 'transparent');
    }
  });
});


$(document).ready(function(){
  $(".slide-one").owlCarousel({
  	items : 3,
   loop  : true,
   margin : 30,
   nav    : true,
   smartSpeed :900,
   navText : ["<i class='fa fa-chevron-left fa-3x'></i>","<i class='fa fa-chevron-right fa-3x'></i>"]
 });
  $(".slide-two").owlCarousel({
    items : 1,
    loop : true,
    center : true,
    nav : false,
    dots : true,
    autoplay:true, //Автозапуск слайдера
    smartSpeed:2000, //Время движения слайда
    autoplayTimeout:4000, //Время смены слайда

  });
});
