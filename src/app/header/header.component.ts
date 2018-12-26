import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-header',
    templateUrl: 'header.component.html',
    styleUrls:["./header.css"]
    
})

export class HeaderComponent implements OnInit {
    url:any="../../miusc/lovely.mp3";

    constructor() {
     }

    ngOnInit() { }
}