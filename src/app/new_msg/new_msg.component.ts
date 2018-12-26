import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-new',
    templateUrl: 'new_msg.component.html',
    styleUrls:['./new_msg.component.css']
})

export class NewMsgComponent implements OnInit {
    submit(){
        var uname=$('#uname').val();
        var msg=$('#msg').val();
        $.ajax({
            url:"http://localhost/project2/php/new_msg.php?uname="+uname+"&msg="+msg,
            type:"GET",
            async:false,
            success:(res)=>{
                alert(res);
                location.href="msg";
            }
        });
    }
    constructor() { }

    ngOnInit() { }
}