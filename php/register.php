<?php
    header('Access-Control-Allow-Origin:*');
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $email=$_REQUEST['email'];
    $conn=mysqli_connect('localhost','root','','myself',3306);
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="INSERT INTO user VALUES(NULL,'$uname',md5('$upwd'),'$email')";
    $res=mysqli_query($conn,$sql);
    if($res===false){
        echo "执行失败，请检查您的SQL语句：$sql";
    }else{
        echo '注册成功！';
    }

?>