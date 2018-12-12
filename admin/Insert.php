<?php
header('Access-Control-Allow-Origin:*');
    include_once "conn.php";
    // username: $('.reg_user').val(),
    // password: $('.reg_password').val(),
    // Email: $('.reg_email').val(),
    // telephone: $(".reg_mobile").val() 


    @$username=$_POST['username'];
    @$password=$_POST['password'];
    @$Email=$_POST['Email'];
    $sql = "INSERT INTO `tb_students`( `username`, `password`, `Email`) VALUES ('$username','$password','$Email')";
    //echo $sql;
    
    if (mysqli_query($conn, $sql)) {
        echo 1;
    } else {
        echo 0;//mysqli_error($conn);
    }
    $sql="CREATE TABLE `$username`(`id` INT UNSIGNED AUTO_INCREMENT,`bookid` VARCHAR(255) NOT NULL,
   `num` VARCHAR(40) NOT NULL,`price` VARCHAR(40) NOT NULL,`bookname` VARCHAR(255) NOT NULL,`photo` VARCHAR(255) NOT NULL,
   PRIMARY KEY ( `id` )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8";
    mysqli_query($conn, $sql);
    mysqli_close($conn);
?>
