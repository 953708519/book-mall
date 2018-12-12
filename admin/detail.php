<?php
header('Access-Control-Allow-Origin:*');
include_once "conn.php";
//检验请求数据
 if(@$_POST['id'])
    {
        $id=$_POST['id'];
        $sql="SELECT * FROM `details` where id=$id" ;
        //echo $sql;
        $result=mysqli_query($conn,$sql);
        while($row=mysqli_fetch_assoc($result)) 
        $detailbook[]=$row;
        $str = array(
              "status"=>"1",
              "data"=>array(
                            "detail"=>$detailbook,//$newbook,
                            )
              
              );
        $strjosn=json_encode($str,JSON_UNESCAPED_UNICODE);
            echo $strjosn;
    }
mysqli_close($conn);   
?>