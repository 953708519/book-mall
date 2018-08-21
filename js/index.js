$(function(){
    //顶部小菜单显示二维码
    $(".l_mobile").hover(function () {
        $(this).find(".mobile").stop();
           $(this).find(".xiahua").css({"transform":"rotate(180deg)",
           "transition":"0.2s ease-in"
        }); 
        $(this).find(".mobile").slideDown(200);  
        }, function () {
            $(this).find(".mobile").stop();
            $(this).find('.xiahua').css({"transform":"rotate(0deg)",
            "transition":"0.2s ease-in"
            });
            $(this).find(".mobile").slideUp(200);  
        }
      );
      //
})