(function ($) {
 "use strict";
    
/*----Sticky Menu JS---*/
    if ($(".sticker")[0]){
        $('.sticker');
        $(window).scroll(function(){
            var wind_scr = $(window).scrollTop();
            var window_width = $(window).width();
            var head_w = $('.sticker').height();
            if (window_width >= 10) {
                if(wind_scr < 400){
                    if($('.sticker').data('stick') === true){
                        $('.sticker').data('stick', false);
                        $('.sticker').stop(true).animate({opacity : 0}, 300, function(){
                            $('.sticker').removeClass('stick slideDown');
                            $('.sticker').stop(true).animate({opacity : 1}, 300);
                        });
                    }
                } else {
                    if($('.sticker').data('stick') === false || typeof $('.sticker').data('stick') === 'undefined'){
                        $('.sticker').data('stick', true);
                        $('.sticker').stop(true).animate({opacity : 0},300,function(){
                            $('.sticker').addClass('stick slideDown');
                            $('.sticker.stick').stop(true).animate({opacity : 1}, 300);
                        });
                    }
                }
            }
        });
    };	
    
/*----Nivo slider ---*/
    (function ($) {
        "use strict";

                    $('#nivoslider').nivoSlider({
                       effect: 'random',
                       slices: 15,
                       boxCols: 10,
                       boxRows: 10,
                       animSpeed: 500,
                       pauseTime: 5000,
                       startSlide: 0,
                       directionNav: true,
                       controlNavThumbs: false,
                       pauseOnHover: false,
                       manualAdvance: true
                    });
       })(jQuery); 

/*--Start Search Toggle--- */
    // Handle click on toggle search button
    $('.header-search').on('click', function() {
        $('.search').toggleClass('open');
        $(this).find('i.fa-search').toggleClass('fa-close');
        return false;
    });
    
    // Handle click on search submit button
    $('#search-form input[type=submit]').on('click', function() {
        $('.search').toggleClass('open');
        return true;
    });
    
    // Clicking outside the search form closes it
    $(document).on('click', function(event) {
        var target = $(event.target);
        
        if (!target.is('.header-search') && !target.closest('.search').length) {
            $('.search').removeClass('open');
            $('#toggle-search').removeClass('fa-close');
        }
    });


    
    new WOW().init();
    

 
/*-Start Owl Carousel --- */  
$('.class-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 3,
    smartSpeed: 1000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});    

/*-Start Owl Carousel --- */  
$('.teacher-info-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 3,
    smartSpeed: 1000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
}); 
    
    
/*-Start Blog Carosel-- */  
$('.blog-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 3,
    smartSpeed: 2000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});   

// start gallery carosel
$('.gallery-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 3,
    smartSpeed: 2000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
}); 
    
    
    
    
/*------Start Teacher carousel------ */  
$('.teacher-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 3,
    smartSpeed: 2000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});     
    


    
    
/*---Start Teacher carousel--------- */  
$('.teachers-column-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 2,
    smartSpeed: 2000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});     
    
    
    
/*----Class Slider----- */  
    $('.class-details-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });  
    
    
    
/*--Scroll Up JS---*/	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
    /*---Dropdown JS of meanmenu--- */
	$('nav#dropdown').meanmenu();	
    
/*-----Counter Up------ */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });    
 // Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});
    
        while (length--) {
            method = methods[length];
    
            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());


// Enroll modal 
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


/*------Testimonial Carousel---*/
    
$('.testimonial-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    item: 2,
    smartSpeed: 2000,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
}); 
    $('.filter-items').mixItUp();   
    $('.venobox').venobox({    
        border: '10px',          
        titleattr: 'data-title',  
        numeratio: true,           
        infinigall: true      
    });
    

    $('.class-schedule .arrow a').on('click', function(e){
        e.preventDefault();
        $(this).find('.fa').toggleClass('fa-angle-right fa-angle-left');
        $(this).parents('.class-schedule').find('.new-social-share').toggleClass('open');
    })


})(jQuery); 



// events page countdown js
$('[data-countdown]').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('<span class="dcare-count days"><span class="count-inner"><span class="time-count">%-D</span> <p>Days</p></span></span> <span class="dcare-count hour"><span class="count-inner"><span class="time-count">%-H</span> <p>Hours</p></span></span> <span class="dcare-count minutes"><span class="count-inner"><span class="time-count">%M</span> <p>Minutes</p></span></span> <span class="dcare-count second"><span class="count-inner"><span class="time-count">%S</span> <p>Seconds</p></span></span>'));
    });
  });

// file input js
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
  

