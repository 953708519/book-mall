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
      //分类显示
     $(".classify-li li").mouseenter(
         function(){
          index=$(this).index();
         $(".classify_nav_box").eq(index).show();
         $(".classify_nav_box").eq(index).siblings(".classify_nav_box").hide();
         }
        );
       $(".classify-bottom").mouseleave(function(){
           $(".classify_nav_box").hide();
       })
      
         
         
})