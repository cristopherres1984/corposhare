import {Component, OnInit} from '@angular/core';
import {AuthService} from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        // in case of page refresh after successful login
        this.authService.login(undefined, undefined);
    }
}
