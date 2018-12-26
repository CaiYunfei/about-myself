import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-login',
    templateUrl: 'login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    toLogin(){
        var uname=$('#login_uname').val();
        var upwd=$('#login_password').val();
        $.ajax({
            url:"http://localhost/project2/php/login.php?uname="+uname+"&upwd="+upwd,
            type:"GET",
            async:false,
            success:(res)=>{
                if(res==="用户名或密码错误！"){
                    alert(res);
                }else{
                    alert(res);
                    location.href="msg";
                }
            }
        });
    }
}