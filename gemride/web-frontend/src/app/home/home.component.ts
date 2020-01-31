import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // myControl: any;
    sliderContent:any[]=
    [
        {
            text:'Pick your location',
            img:'../../assets/logo/TEAM.png'
        },
        {
            text:'Come along with coworkers',
            img:'../../assets/logo/location.png'
        },
        {
            text:'Care about the enviroment and your pocket',
            img:'../../assets/logo/TEAM.png'
        },
    ];
    constructor() {
    }
    ngOnInit() {
    }
}
