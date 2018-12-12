<?php
header('Access-Control-Allow-Origin:*');
include_once "conn.php";
//@var_dump($_POST['name']);
if(@$_POST['name']!=NULL)
{
    $userName   = $_POST['name'];
    $sql="SELECT username FROM `tb_students` WHERE username='$userName'" ;
    $result=mysqli_query($conn,$sql);
    if (mysqli_num_rows($result) > 0) {
        // // 输出数据
        // while($row = mysqli_fetch_assoc($result)) {
        //     echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        echo 0;
        }
     else {
        echo "1";
    }
    //var_dump( $result);
    //echo $result;
    // $i = array_search($userName,$userList);
    // if(is_int($i)) 
    // echo 0;
    // else 
    // echo 1;
}
if(@$_POST['email']!=NULL)
{
    $email = $_POST['email'];
    $sql="SELECT Email FROM `tb_students` WHERE Email='$email'" ;
    $result=mysqli_query($conn,$sql);
    if (mysqli_num_rows($result) > 0) 
    {
        // 输出数据
        // while($row = mysqli_fetch_assoc($result)) 
        //     echo $row['telephone'];
        echo 0;
        }
     else {
        echo 1;
    }
}

if(isset($_POST["target_email"])){
    $target_email=$_POST["target_email"];
    $code=rand(1000,9999);
            function send_post($url, $post_data) {    
                $postdata = http_build_query($post_data);    
                $options = array(    
                        'http' => array(    
                            'method' => 'POST',    
                            'header' => 'Content-type:application/x-www-form-urlencoded',    
                            'content' => $postdata,    
                            'timeout' => 15 * 60 // 超时时间（单位:s）    
                        )    
                    );    
                    $context = stream_context_create($options);    
                    $result = file_get_contents($url, false, $context);             
                    return $result;    
            }
            $post_data = array('code'=>$code,
                                'target_email'=>$target_email);
            $url = "http://47.92.31.246:9004/email-verification";
            $res=send_post($url, $post_data);
            echo $code;
            $code=md5($code);
            setcookie('yzmcode',$code,time()+60);
}
if(isset($_POST['yzmcode']))
{
    echo 1;
    /*if(md5($_POST['yzmcode'])==$_COOKIE['yzmcode'])
    {  
        echo 1;
    }
    
    else 
    echo 1; */
}
    mysqli_close($conn);
?>
