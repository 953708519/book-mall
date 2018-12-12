$(function(){
    var url=location.search;
    var ida=url.slice(1);
    var username;
    $.ajax({
        url:"http://134.175.20.253/login1.1/admin/detail.php",
        type:"post",
        data:{id:ida},
        success:function(data){
          var data=JSON.parse(data).data.detail[0];
          var imgsrc='http://134.175.20.253/login1.1/images/details/'+data.leftphoto;
          $('#left').attr('src',imgsrc);
          $('.detail_tit').html(data.bookname);
          $('.detail_tit_md').html('作者：'+data.author);
          $('.price_now').html('￥'+data.price);
          $('#press').html(data.press);
          $('.detail_con').html('<img src="http://134.175.20.253/login1.1/images/details/'+data.photo+'" alt="">');
          $('.d_l_con1_l').html(data.introduce);
          $('title').text(data.bookname+"书籍详情");
        },
         
          });
   $.ajax
      ({
      url:"http://134.175.20.253/login1.1/admin/home.php",
      type:"post",
      data:{home:1},
      success:function(data)
      {
       var data=JSON.parse(data);
       var newbook=data.data.newbook;
       var hotbook=data.data.hotbook;
       for(var i=0;i<5;i++){
           (function () {
               var a=i;
       var text=' <li class="nb-item"><a href="item.html?'+newbook[a].id+'" class="pic"><img src="http://134.175.20.253/login1.1/images/books/'+newbook[a].photo+'" alt="" ></a>'+
       '<p class="book-name">'+newbook[a].bookname+'</p>'+
       '<p class="author">'+newbook[a].author+'</p>'+
       '<p class="book-price">¥'+newbook[a].price+'</p>'+
       '</li>';
       
       $('#tuijian').append(text)  })(i);
    
        };
      }
    });
    if(sessionStorage.username)
    {$('#user').text(sessionStorage.username);
     var username=sessionStorage.username;
    $('#user').attr("href","#");}
    $('#cart').click(function (e) { 
      if(sessionStorage.username)
      {
        var num=$('#buy_num').val();
      e.preventDefault();
      $.post("http://134.175.20.253/login1.1/admin/shoppingcar.php",{id:ida,num:num,username:username,status:2},
      function(data)
         { 
           console.log(data);
           if(data==1)
           {
             alert("添加成功");
           }
           else{
             alert("添加失败");
           }
         }
      );
      }
      else{
        alert('请登录')
      }
    });
});
