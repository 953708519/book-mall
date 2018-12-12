<?php
header('Access-Control-Allow-Origin:*');
include_once "conn.php";
//校验用户是否登录
function checklogin(){
                $sign=1;
                if(!isset($_COOKIE['token']))
                {
                    
                    if(!isset($_COOKIE['tokenls']))
                    {       
                        $sign=0;
                    }
                    else
                    {
                        $str=$_COOKIE['tokenls'];
                        $var=explode(":",$str);              
                        $username=$var[0];
                        $sql="SELECT * FROM `tb_students` WHERE username='$username'" ;
                        $result=mysqli_query($GLOBALS['conn'],$sql);
                        if (mysqli_num_rows($result) ==1)
                        {
                                    $row=mysqli_fetch_assoc($result);
                                    $username=$row['username'];
                                    $password=$row['password'];
                                    $key='zheng';
                                    $tokenstr=$username.':'.md5($password.$key);
                                    if($str!=$tokenstr)
                                    {   
                                        $sign=0;
                                    }   
                        }
                                else
                                {
                                    $sign=0;
                                }
                    }
                }
                else
                {
                //校验用户登录凭证
                        $token=$_COOKIE['token'];
                        $username=$_COOKIE['username'];
                        $sql="SELECT * FROM `tb_students` WHERE username='$username'" ;
                        $result=mysqli_query($conn,$sql);
                        if (mysqli_num_rows($result) ==1)
                        {
                            $row=mysqli_fetch_assoc($result);
                            $username=$row['username'];
                            $password=$row['password'];
                            $key='zheng';
                            $tokenstr=md5($username.$password.$key);
                            if($token!=$tokenstr)
                            {
                                $sign=0;
                            }   
                        }
                        else{
                            $sign=0;
                        }
                       
                }
                    return $sign;

} 

//获取用户名
function username(){
    $username=0;
    if(isset($_COOKIE['token']))
    {
        $token=$_COOKIE['token'];
        $username=$_COOKIE['username'];
    }
    else if(isset($_COOKIE['tokenls']))
    {       
        $str=$_COOKIE['tokenls'];
        $var=explode(":",$str);              
        $username=$var[0];
    }
    return $username;
                        
} 
    if(@$_POST['user']==0)
{
    echo checklogin();
} 

 if(@$_POST['username']==0)
{
    echo username();
} 
if(@$_GET['state']=='exitlogin')
{
    $username=$_COOKIE['tokenls'];
    setcookie('tokenls',$username,time()-1,'/');
    exit("<script>
    location.href='../index.html';
    </script>");
    //echo 111;//
}
   
if(isset($_POST["submit"]))
{
     
    $username=$_POST['username'];
    $password=$_POST['password'];
    @$autoLogin=$_POST['autoLogin'];
    echo $username;
    echo $password;
    $sql="SELECT * FROM `tb_students` WHERE username='$username'" ;
    $result=mysqli_query($conn,$sql);
    if (mysqli_num_rows($result)==1)
    {
        $row=mysqli_fetch_assoc($result);
        if($row['password']==$password)
        {
             if($autoLogin==1)
             {
                setcookie('username',$username,strtotime('+7 days'));
                $key='zheng';
                $token=md5($username.$password.$key);
                setcookie('token',$token,strtotime('+7 days'),'/');
            }
            else{
                $key='zheng';
                $tokenls=$username.':'.md5($password.$key);
                header("Set-Cookie: tokenls=$tokenls; path=/; ");//setcookie('username',$username);
            }
                
            exit("<script>
                location.href='../index.html';
                </script>");
                //echo 111;//
                
        }
        else
        {
            exit("<script>
                alert('Logon failed1!');
                location.href='../login.html';
                </script>");
        }   
    }
    else
        {
            exit("<script>
                alert('Logon failed2!');
                
                </script>");
        }   

 
    }
   // else
   // {
   //     echo '错误';
   // }
                 
mysqli_close($conn);   
?>

