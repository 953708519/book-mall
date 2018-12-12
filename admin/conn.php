<?php
$mysql_server='localhost';
 $mysql_username='root';
 $mysql_password="123456";
$mysql_database='db_stu';
 //建立数据库链接并且选择某个数据库
@$conn = mysqli_connect($mysql_server,$mysql_username,$mysql_password,$mysql_database) or die("数据库链接错误");
if(!$conn)
echo "<script>alert('数据库连接失败！')</script>";
 //else
 //echo "<script>alert('数据库连接成功！')</script>";
mysqli_query($conn,"set names 'utf8'");
?>