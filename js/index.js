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
       });
      
    function linkMenu(n) {
        document.getElementById('link' + n).className = "link" + n + "_o";
        document.getElementById('abtn' + n).className = "left_bar_over";
        document.getElementById('showdown' + n).style.display = "block";
    };
    
    function showDiv(n) {
        for (i=1;i<=7;i++)//i<=7 这里的7为选项卡的li个数
        {
            var abtn = document.getElementById('abtn' + i);
            var showdown = document.getElementById('showdown' + i);
            abtn.className = i == n ? "left_bar_over": "left_bar_out";
            showdown.style.display = i == n ? "block": "none";
        }
    }   ;    
         
})