<?php
    $conn=mysqli_connect('localhost','root','','myself',3306);
    mysqli_query($conn,"SET NAMES UTF8");
    $sql="SELECT * FROM message";
    $res=mysqli_query($conn,$sql);

    if($res===false){
        echo '执行失败，请检查您的SQL语句：$sql';
    }else{
        $list=mysqli_fetch_all($res,1);
        #$toMsg=json_encode($list); $res=json_encode({"res":"success"});
        $callback = isset($_GET['callback']) ? trim($_GET['callback']) : ''; #jsonp回调参数，必需
        $toMsg=json_encode($list);
        echo $callback . '(' . $toMsg .')';  //返回格式，必需
    }

?>