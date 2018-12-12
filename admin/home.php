<?php
header('Access-Control-Allow-Origin:*');
include_once "conn.php";
//检验请求数据
 /*if(@$_POST['home']==1)
    {*/
        $sql="SELECT * FROM `homepage` WHERE type='newbook'" ;
        $result=mysqli_query($conn,$sql);
        while($row=mysqli_fetch_assoc($result)) 
        $newbook[]=$row;

        $sql="SELECT * FROM `homepage` WHERE type='hotbook'" ;
        $result=mysqli_query($conn,$sql);
        while($row=mysqli_fetch_assoc($result)) 
        $hotbook[]=$row;
        //echo $newbookstr;
        $str = array(
              "status"=>"1",
              "data"=>array(
                            "newbook"=>$newbook,//$newbook,
                            "hotbook"=>$hotbook
                            )
              
              );
        $strjosn=json_encode($str,JSON_UNESCAPED_UNICODE);
            echo $strjosn;
    /*}*/
    
         
mysqli_close($conn);   
?>

