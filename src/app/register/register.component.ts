import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-register',
    templateUrl: 'register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit {
    regAgree:any="false";
    regChecked:any="";
    uname_msg:any="";
    uname_value:any="";

    upwd_msg:any="";
    upwd_value:any="";

    cpwd_msg:any="";
    cpwd_value:any="";

    email_msg:any="";
    email_value:any="";
    
    constructor() {
        
     }

    ngOnInit() { }

    isAgree(){
        if(this.regChecked == "true"){
            this.regChecked = "";
            this.regAgree="true";
        }else if(this.regChecked == ""){
            this.regAgree="";
            this.regChecked="true";
        }
    
    }

    toRegister(){
        if(this.uname_msg!=="√" || this.upwd_msg!="√" || this.cpwd_msg!="√" || this.email_msg!="√"){
            return false;
        }
        var uname=$('#register_uname').val();
        var upwd=$('#register_upwd').val();
        var email=$('#register_email').val();
        $.ajax({
            url:"http://localhost/project2/php/register.php?uname="+uname+"&upwd="+upwd+"&email="+email,
            async:false,
            success:(res)=>{
                alert(res);
                location.href="login";
            }
        });
    }

    /*用户名部分开始*/
    uname_focus(){
        //if()
        this.uname_msg="请输入3~18位用户名";
        if(this.uname_value.length>=3 && this.uname_value.length<=18 ){
            this.uname_msg="√";
        }
        $.ajax({
            url:"http://localhost/project2/php/reg_uname.php?uname="+this.uname_value,
            type:"GET",
            async:false,
            success:(res)=>{
                if(res==='该用户名已被占用！'){
                    this.uname_msg=res;
                }else{
                    if(this.uname_value.length>=3 && this.uname_value.length<=18 ){
                        this.uname_msg="√";
                    }else if(this.uname_value.length<3 && this.uname_value.length>0){
                        this.uname_msg="用户名长度过短！";
                    }else if(this.uname_value.length>18){
                        this.uname_msg="用户名长度过长！";
                    }else if(!this.uname_value){
                        this.uname_msg="用户名不能为空！";
                    }
                }
            }
        });
    }

    uname_blur(){
        $.ajax({
            url:"http://localhost/project2/php/reg_uname.php?uname="+this.uname_value,
            type:"GET",
            async:false,
            success:(res)=>{
                if(res==='该用户名已被占用！'){
                    this.uname_msg=res;
                }else{
                    if(this.uname_value.length>=3 && this.uname_value.length<=18 ){
                        this.uname_msg="√";
                    }else if(this.uname_value.length<3 && this.uname_value.length>0){
                        this.uname_msg="用户名长度过短！";
                    }else if(this.uname_value.length>18){
                        this.uname_msg="用户名长度过长！";
                    }else if(!this.uname_value){
                        this.uname_msg="用户名不能为空！";
                    }
                }
            }
        });
        
        
    }
    /*用户名部分结束*/

    /*密码部分开始*/
    upwd_focus(){
        this.upwd_msg="请设置6~20位的密码";
        if(this.upwd_value.length>=6 && this.upwd_value.length<=20){
            this.upwd_msg="√";
        }
    }

    upwd_blur(){
        if(this.upwd_value.length>=6 && this.upwd_value.length<=20){
            this.upwd_msg="√";
        }else if(this.upwd_value.length<6 && this.upwd_value.length>0){
            this.upwd_msg="密码长度过短！";
        }else if(this.upwd_value.length>20){
            this.upwd_msg="密码长度过长！";
        }else if(!this.upwd_value){
            this.upwd_msg="密码不能为空！";
        }
    }
    /*密码部分结束*/

    /*确认密码部分开始*/
    cpwd_focus(){
        this.cpwd_msg="请再次确认您要设置的密码";
        if(!this.upwd_value){
            this.cpwd_msg="请先设置密码！";
        }else if(this.cpwd_value===this.upwd_value && this.upwd_value!=0){
            this.cpwd_msg="√";
        }
    }

    cpwd_blur(){
        if(this.cpwd_value===this.upwd_value && this.upwd_value.length!=0){
            this.cpwd_msg="√";
        }
    }
    /*确认密码部分结束*/

    /*邮箱部分开始*/
    email_focus(){
        this.email_msg="请输入正确的邮箱格式！";
        var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if(reg.test(this.email_value) && this.email_value.length!=0){
            this.email_msg="√";
        }
    }

    email_blur(){
        var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if(reg.test(this.email_value) && this.email_value.length!=0){
            this.email_msg="√";
        }else if(this.email_value.length===0){
            this.email_msg="邮箱不能为空！";
        }else{
            this.email_msg="请输入正确的邮箱格式！";
        }
    }
    /*邮箱部分结束*/
}