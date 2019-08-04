$(document).ready(function(){
    $('#owl1').owlCarousel({
        loop:true,
        nav: false,
    
        autoplay: true,
        autoplayTimeout:3000,    
        smartSpeed:800,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
               
            },
            1000:{
                items:1,
             
            }
        }
      
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 90) {
            $("header").addClass('secondary-dark-blue-bg');
        }
        else if ($("header").hasClass('secondary-dark-blue-bg')){
            $("header").removeClass('secondary-dark-blue-bg');
        }
    });
    
    
    $('#owl2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout:2000,    
        smartSpeed:800,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#owl3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout:2000,    
        smartSpeed:800,
        
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    
    
    $('#owl4').owlCarousel({
        loop:true,
        nav: false,
        margin:10,
        autoplay: true,
        autoplayTimeout:3000,    
        smartSpeed:800,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
               
            },
            1000:{
                items:1,
             
            }
        }
      
    });
    
    $(document).ready(function(){
        $(".opener").click(function(){
            $(".opener").toggleClass("active");
            $("nav").toggleClass("active");
        })
        $("a").click(function(){
            $("a").toggleClass("selected");
            $("nav").toggleClass("selected");
        })
       
    });

});
