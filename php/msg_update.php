<?php
    header('Access-Control-Allow-Origin:*');
    $mid=$_REQUEST['mid'];
    $conn=mysqli_connect('localhost','root','','myself',3306);
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="SELECT * FROM message WHERE mid=$mid";
    $res=mysqli_query($conn,$sql);
    if($res===false){
        echo "执行失败，请检查您的SQL语句：$sql";
    }else{
        $list=mysqli_fetch_all($res,1);
        #echo $list;
        echo $list[0]["mName"];
        echo $list[0]["mContent"];
    }

?>