import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ng-update',
    templateUrl: 'update_msg.component.html',
    styleUrls:['./update_msg.component.css']
})

export class UpdateMsgComponent implements OnInit {
    mid:number;//定义变量接受传来的参数
    mName:any="";
    mContent:any="";

    constructor( public myAr:ActivatedRoute ) {
        this.myAr.params.subscribe((result)=>{
			this.mid=result.id;
		})
        console.log(this.mid);
     }

    ngOnInit() { 
        $.ajax({
            url:"http://localhost/project2/php/msg_update.php?mid="+this.mid,
            type:"GET",
            async:false,
            success:(res)=>{
                this.mName=res.substring(0,3);//截取前三位为用户名
                this.mContent=res.substring(3);//剩下的内容为留言信息
                console.log(res);
            }
        });
    }

    toUpdate(){
        var msg=$('#msg').val();
        $.ajax({
            url:"http://localhost/project2/php/toUpdate.php?mContent="+msg+"&mName="+this.mName+"&mid="+this.mid,
            async:false,
            success:(res)=>{
                alert(res);
                location.href="msg";
            }
        });
    }
}