<?php
    header('Access-Control-Allow-Origin:*');
    $mid=$_REQUEST['mid'];
    $conn=mysqli_connect('localhost','root','','myself',3306) or die('链接数据失败');
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="DELETE FROM message WHERE mid=$mid";
    $res=mysqli_query($conn,$sql);
    if($res===false){
        echo "执行失败，请检查您的SQL语句：$sql";
    }else{
        $tmp="删除成功";
        echo $tmp;
    }

?>
