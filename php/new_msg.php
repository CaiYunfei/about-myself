<?php
    header('Access-Control-Allow-Origin:*');
    $uname=$_REQUEST['uname'];
    $msg=$_REQUEST['msg'];
    #$time=$_REQUEST['time'];
    $conn=mysqli_connect('localhost','root','','myself',3306);
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="INSERT INTO message VALUES(NULL,'2018-12-17','$msg','$uname',1)";
    $res=mysqli_query($conn,$sql);
    if($res===false){
        echo "执行失败，请检查您的SQL语句：$sql";
    }else{
        echo "发表留言成功！";
    }

?>