<?php
header('Access-Control-Allow-Origin:*');
    include_once "conn.php";
    // username: $('.reg_user').val(),
    // password: $('.reg_password').val(),
    // Email: $('.reg_email').val(),
    // telephone: $(".reg_mobile").val() 
$username='zdg123';

   /*$sql="CREATE TABLE `$username`(`id` INT UNSIGNED AUTO_INCREMENT,`bookid` VARCHAR(255) NOT NULL,
   `num` VARCHAR(40) NOT NULL,`bookname` VARCHAR(255) NOT NULL,`photo` VARCHAR(255) NOT NULL,
   PRIMARY KEY ( `id` )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8";
    mysqli_query($conn, $sql);*/
    $id=1;
    $photo=$id.'.jpg';
    echo $photo;
    mysqli_close($conn);
?>