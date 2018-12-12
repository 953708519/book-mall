$(function(){
    if(sessionStorage.username)
    {$('#user').text(sessionStorage.username);
    var username=sessionStorage.username;
    $('#user').attr("href","#");}
    $.ajax({
        type: "post",
        url: "http://134.175.20.253/login1.1/admin/shoppingcar.php",
        data: {status:1,username:sessionStorage.username},
        success: function (data) {
           var data=JSON.parse(data);
          if(data.status==0)
            {
              $('.car_no_goods').show();
            }
          else{
              $('.car_no_goods').hide();
              data=data.data;
              for(var i=0;i<data.length;i++){
                (function () {
                    var a=i;
                     var text='	<div class="item_form">'+
                     '						<div class="cart_checkbox">'+
                     '							<img src="http://134.175.20.253/login1.1/images/details/'+data[i].photo+'" alt="" style="width: 150px">'+
                     '						</div>'+
                     '						<div class="column cart_standard">'+
                     '								<div class="item_msg">'+
                     '							      <a target="_blank" href="item.html?'+data[i].bookid+'">'+data[i].bookname+'</a>	'+
                     '								</div>'+
                     '						</div>'+
                     '						<div class="column t_price ">'+
                     '							<p class="p_prices2" style="padding-top:70px">￥'+data[i].price+'</p>'+
                     '						</div>'+
                     '						<div class="column t_quantity">'+
                     '							<p class="p_prices2" style="padding-top:70px">'+data[i].num+'</p>'+
                     '						</div>'+
                     '						<div class="cell p_quantity">'+
                     '							<div class="p_prices2 p" style="padding-top:70px" >￥'+data[i].num*data[i].price+'</div>'+
                     '						</div>'+
                     '                      <div style="margin-top:57px; cursor: pointer;"> '+
'							                    <span class="iconfont" style="font-size: 24px" data-id='+data[i].id+'>&#xe611;</span>'+
'						                    </div>'+
                     '					</div>';
            
            $('#goods').append(text)  })(i);
          }
              var text2='<div class="model_submilt" >'+
              '  <div class="btn_goods_remind" id="buy">立即购买</div>'+
              '</div>';
              $('#goods').after(text2);
              var count=0;
              $('.p').each(function(){
                 var a=$(this).text().slice(1);
                 var b=parseFloat(a);
                 b=b.toFixed(2);
                 b=parseFloat(b);
                 console.log(b);
                 count=count+b;
                 
              })
             
              $('#buy').click(function () {
               $('#zhezhao').show(); 
               $('#num').text(data.length);
               $('#cost').text(count);
               $('#return').click(function () {
                $('#zhezhao').hide(); 
                 })
                })
          $('.iconfont').each(function () {
        
            $(this).click(function(){
                 var deletetid=$(this).attr('data-id');
                
                 $.ajax({
                     type: "post",
                     url: "http://134.175.20.253/login1.1/admin/shoppingcar.php",
                     data: {status:3,id:deletetid,username:sessionStorage.username},
                     success: function (data) {
                        
                         alert("删除成功");
                        window.location.reload();
                     }
                 });
             })
           })  
        }
     }
    });
   
  
})