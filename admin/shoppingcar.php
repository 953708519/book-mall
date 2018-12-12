<?php
header('Access-Control-Allow-Origin:*');
    include_once "conn.php";
    @$status=$_POST['status'];
    if($status==2)
    {
        @$id=$_POST['id'];
        @$num=$_POST['num'];
        @$username=$_POST['username'];
        //$username = substr($username,0,strlen($username)-1);
        $sql="SELECT bookname,price FROM `homepage` WHERE id='$id'" ;
        $result=mysqli_query($conn, $sql);
        $row=mysqli_fetch_assoc($result);
        $bookname=$row['bookname'];
        $price=$row['price'];
        $photo='left'.$id.'.jpg';
        $sql = "INSERT INTO $username(`bookid`, `num`, `price`, `bookname`, `photo`) VALUES ('$id','$num','$price','$bookname','$photo')";
        if (mysqli_query($conn, $sql)) {
            echo 1;
        } else {
            echo $sql;//mysqli_error($conn);
        }
    }
    

    //获取数据
     @$status=$_POST['status'];
    if($status==1)
    {
        $username=$_POST['username'];
        $sql="SELECT *FROM $username" ;
        $hotbook = array();
        $result=mysqli_query($conn,$sql);
        while($row=mysqli_fetch_assoc($result)) 
        $hotbook[]=$row;
        //echo $newbookstr;
    if($hotbook==null)
       {
        
            $str = array(
              "status"=>"0",
              );
        $strjosn=json_encode($str,JSON_UNESCAPED_UNICODE);
            
       }
       else 
        {
        $str = array(
              "status"=>"1",
              "data"=>$hotbook
              );
        $strjosn=json_encode($str,JSON_UNESCAPED_UNICODE);
       }
        echo $strjosn;
    }

    //删除数据
     @$status=$_POST['status'];
    if($status==3)
    {
        $username=$_POST['username'];
        $id=$_POST['id'];

        $sql="DELETE FROM $username WHERE id=$id";
        $result=mysqli_query($conn,$sql);
    }
    mysqli_close($conn);
?>