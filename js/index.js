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
          var index=$(this).index();
         $(".classify_nav_box").eq(index).show();
         $(".classify_nav_box").eq(index).siblings(".classify_nav_box").hide();
         }
        );
       $(".classify-bottom").mouseleave(function(){
           $(".classify_nav_box").hide();
       });
    $('#wraps .down>.clearfix').eq(1).show();
     $('#wraps .top li').mouseenter(function(){
         var index=$(this).index();
         
         $('#wraps .down>.clearfix').eq(index).show();
         $('#wraps .down>.clearfix').eq(index).siblings().hide();
     });
      $(window).scroll(function(){
        if( $(window).scrollTop()<300){
            $('#fix-nav').fadeOut(300);
         }
         else
         $('#fix-nav').fadeIn(300);
      });


  
  $.ajax({
          url:"http://134.175.20.253/login1.1/admin/logincheck.php",
          type:"post",
          data:{user:0},
          success:function(data){
             console.log(data);
              if (data==0)
              {
                  $('#user').attr("href","login.html");
                  return ;
              }
              else{
              $.ajax({
                url:"http://134.175.20.253/login1.1/admin/logincheck.php",
                 type:"post",
                 data:{username:0},
                 success:function(data){
                  $('#user').text(data);
                  $('#user').attr("herf","#");
                 },
              
              })}
          },
            });
           
       
});

function navSlide(ele,speed){ 
    if(!speed) speed = 300;
    if(!ele){
    $("html,body").animate({scrollTop:0},speed);
    }else{
    if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
   }
    return false;
}
