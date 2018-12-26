<?php
    header('Access-Control-Allow-Origin:*');
    $mName=$_REQUEST['mName'];
    $mContent=$_REQUEST['mContent'];
    $mid=$_REQUEST['mid'];
    $conn=mysqli_connect('localhost','root','','myself',3306);
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="UPDATE message SET mContent='$mContent',mName='$mName' WHERE mid=$mid";
    $res=mysqli_query($conn,$sql);
    if($res===false){
        echo "执行失败，请检查您的SQL语句：$sql";
    }else{
        echo '修改成功！';
    }

?>