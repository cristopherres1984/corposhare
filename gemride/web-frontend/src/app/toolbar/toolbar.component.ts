import {Component, OnInit} from '@angular/core';
import {HamburgerToggleService} from '../group-search/services/hamburger-toggle.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    hamburgerIsVisible = false;
    hamburgerChatIsVisible = false;

    constructor(private hamburgerService: HamburgerToggleService) {
    }

    hamburgerOff() {
        this.hamburgerIsVisible = false;
    }

    hamburgerOn() {
        this.hamburgerIsVisible = true;
        this.hamburgerService.isOpen = false;
    }

    hamburgerChatOff() {
        this.hamburgerChatIsVisible = false;
    }

    hamburgerChatOn() {
        this.hamburgerChatIsVisible = true;
        this.hamburgerService.isOpen = false;
    }

    onClick() {
        this.hamburgerService.toggle();
    }

    ngOnInit() {
    }
}
