$(function(){
    var user_Boolean = false;

var password_Boolean = false;

var varconfirm_Boolean = false;

var emaile_Boolean = false;

var yzm_Boolean = false;

//用户名认证
$('.reg_user').blur(function(){
  
  if (!(/^[a-z0-9_-]{4,16}$/).test($(".reg_user").val())){
      
      $('.user_hint').html("请输入4-16位用户名").css("color","red");
      user_Boolean = false;
      return ;  
  }
        $.ajax({
                url:"http://134.175.20.253/login1.1/admin/checkregister.php",
                type:"post",
                data:{name: $(".reg_user").val()},
                success:function(data){
                    if (data==0)
                    {
                        $('.user_hint').html("用户名已存在").css("color","red");
                        user_Boolean = false;
                        //alert("用户名已被注册，请重新输入！");
                        return ;
                    }
                    else{
                        user_Boolean = true;
                        
                        return;
                    }
                    
                },
                error:function(data){
                    console.log(data);
                }
            });
            $('.user_hint').html("✔  可用用户名").css("color","green");
        
});
//密码认证
$('.reg_password').blur(function(){

  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){

    $('.password_hint').html("✔ 可用密码").css("color","green");

    password_Boolean = true;

  }else 
  {

    $('.password_hint').html("请输入6-16位密码").css("color","red");

    password_Boolean = false;

  }

});

$('.reg_confirm').blur(function(){

  if (($(".reg_password").val())==($(".reg_confirm").val())){

    $('.confirm_hint').html("✔").css("color","green");

    varconfirm_Boolean = true;

  }else {

    $('.confirm_hint').html("两次输入密码不同").css("color","red");
    varconfirm_Boolean = false;

  }

});
//邮箱验证
$('.reg_email').blur(function(){

  if (!(/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())||$(".reg_email").val()!=(/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/)){

    $('.email_hint').html("Email format error").css("color","red");

    emaile_Boolean = false;

  }else 
    emaile_Boolean = true;
    
    $.ajax({
                url:"http://134.175.20.253/login1.1/admin/checkregister.php",
                type:"post",
                data:{email: $(".reg_email").val()},
                success:function(data){
                   console.log(data);
                    if (data==0)
                    {
                        $('.email_hint').html("mailbox has been registered").css("color","red");
                        emaile_Boolean = false;
                        return ;
                    }
                    else
                    emaile_Boolean = true;
                },
                error:function(data){
                    console.log(data);
                }
            });
            if( emaile_Boolean == true)

  $('.email_hint').html("✔:邮箱已被注册").css("color","green");


});

//发送验证码
$('#yzm_button').click(function(){
    
    if(emaile_Boolean==false)
    {
       return;
    }
    else if(emaile_Boolean!=false)
    {
        $.ajax({
                url:"http://134.175.20.253/login1.1/admin/checkregister.php",
                type:"post",
                data:{
                    target_email: $('.reg_email').val()
                },
                success:function(data){  
                        $("#yzm_button").attr({"disabled":"disabled"});
                        $("#yzm_button").css("background-color", "lightslategrey");
                        $("#yzm_button").css("border", "lightslategrey");
                        var i=60;
                        var timehwnd=setInterval(function(){
                        i--;
                            if(i == 0)
                            {
                                $("#yzm_button").html("获取验证码");
                                $("#yzm_button").removeAttr("disabled");
                                $("#yzm_button").css("background-color", "#1c4eda");
                                $("#yzm_button").css("border", "#1c4eda");
                                clearInterval(timehwnd);
                            }
                            else
                            {
                                
                                $("#yzm_button").html("Once again("+i+")");
                            }
                        },1000);
                         return ;
                },
                error:function(data){
                    console.log(data);
                }
            });
    }
});

// //手机验证
// $('.reg_mobile').blur(function(){

//   if (!(/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
//     Mobile_Boolean = false;
//     $('.mobile_hint').html("×").css("color","red");
//     return ;
//   }
//   else 
//     Mobile_Boolean = true;
   
//   $.ajax({
//                 url:"checkregister.php",
//                 type:"post",
//                 data:{telnum: $(".reg_mobile").val()},
//                 success:function(data){
//                    console.log(data);
//                     if (data==0)
//                     {
//                         $('.mobile_hint').html("×").css("color","red");
//                         Mobile_Boolean = false;
//                         //alert($('.reg_mobile').val()+"该手机号已被注册！");
//                         return ;
//                     }
//                     else
//                     user_Boolean = true;
//                 },
//                 error:function(data){
//                     console.log(data);
//                 }
//             });
//             if( Mobile_Boolean == true)
//             $('.mobile_hint').html("✔").css("color","green");
// });
//验证码认证
$('.reg_code').blur(function(){
  var  text= $(".reg_code").val();
  $.ajax({
                url:"http://134.175.20.253/login1.1/admin/checkregister.php",
                type:"post",
                data:{yzmcode: text},
                success:function(data){
                   console.log(data);
                    if (data==1)
                    {
                        $('.code_hint').html("✔").css("color","green");
                        yzm_Boolean = true;
                        return ;
                    }
                    else{
                        $('.code_hint').html("验证码错误或失效").css("color","red");
                    yzm_Boolean = false;}
                },
                error:function(data){
                    console.log(data);
                }
            });                              
});

$('#red_button').click(function(){

  if(user_Boolean && password_Boolean && varconfirm_Boolean && emaile_Boolean  &&yzm_Boolean== true){

    $.ajax({
                url:"http://134.175.20.253/login1.1/admin/Insert.php",
                type:"post",
                data:{
                    username: $('.reg_user').val(),
                    password: $('.reg_password').val(),
                    Email: $('.reg_email').val(),   
                },
                success:function(data){
                   console.log(data);
                    if (data==1)
                    { 
                       alert("注册成功");
                       $('.reg_user').val(""); 
                       $('.reg_password').val("");
                       $('.reg_confirm').val("");
                       $('.reg_email').val("");
                       $('.reg_code').val("");
                        return ;
                    }
                    else
                    alert(data);
                },
                error:function(data){
                    console.log(data);
                }
            });
            
    

  }else {

    alert("请完善你的注册信息");

  }

});

})