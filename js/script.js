$(function() {

// menu
    $(".nav > ul > li").mouseover(function(){
        // alert("Click");
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(100);
    });

// slider
    function moveSlider(){
        $(".sliderWrap").animate({marginLeft:"-800px"},1000,
            function(){
                $(".sliderWrap").append($(".sliderWrap .slider").first());
                $(".sliderWrap").css({marginLeft:0});
            });
    }
    setInterval(moveSlider, 3000);

// popup
    $(".popup").click(function(){
        $(".popup-cont").show();
    });
    $(".popup-close").click(function(){
        $(".popup-cont").hide();
    });



});  

