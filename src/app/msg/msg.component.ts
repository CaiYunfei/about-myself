import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'ng-msg',
    templateUrl: 'msg.component.html',
    styleUrls:['./msg.component.css']
})

export class MsgComponent implements OnInit {
    msgs=[];
    
    constructor(public myAR:ActivatedRoute) { 
       
     }

    ngOnInit() {
        $.ajax({
            url:"http://localhost/project2/php/msg.php",
            type:"get",
            dataType:"jsonp",
            async:false,
            jsonp: 'callback', //jsonp回调参数，必需
            success:(res)=>{
               for(var i=0;i<res.length;i++){
                   this.msgs.push(res[i]);
               }
            },
            error:(req)=>{
                console.log(req);
                console.log(1433223);
            }
        });
        console.log(23134214);
        return false;
     }

     delete(myid){
         var tmp=confirm('确定删除该留言？');
         console.log(tmp);
         console.log(myid);
         if(!tmp){
             return false;
         }
         //var msg_mid=$(".msg_mid").html();
         $.ajax({
            url:"http://localhost/project2/php/msg_delete.php?mid="+myid,
            type:"GET",
            async:false,
            success:(res)=>{
                alert(res);
                location.href="msg";
            }
         });
     }

}