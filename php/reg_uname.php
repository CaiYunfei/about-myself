<?php
    header('Access-Control-Allow-Origin:*');
    $uname=$_REQUEST['uname'];
    $conn=mysqli_connect('localhost','root','','myself',3306);
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="SELECT * FROM user WHERE uname='$uname'";
    $res=mysqli_query($conn,$sql);
    if($res===false){
        echo "执行失败，请检查您的SQL语句：$sql";
    }else{
        $list=mysqli_fetch_all($res,1);
        if(count($list)===0){
            echo '用户名未重复';
        }else{
            echo '该用户名已被占用！';
        }
    }

?>