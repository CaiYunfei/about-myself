import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-index',
    templateUrl: 'index.component.html',
    styleUrls:['./index.component.css']
})

export class IndexComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

  toTop:any = "../../img/top.png";
  toTopState = "hid" ;
  ifShow = "showAll";


  toTopin(){
    this.toTopState="chuxian";
  }
  goin(){
    this.toTopState="hid";
  }
  goToTop(){
    var timer=setInterval(function(){
        var ost=document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条到页面顶部的高度
        var speed=Math.floor(ost/3);
        document.documentElement.scrollTop=document.body.scrollTop=ost-speed;
        console.log(ost);
        if(ost<4){
            clearInterval(timer);
        }
    },30);
  }
}