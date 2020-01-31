import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HamburgerToggleService} from './services/hamburger-toggle.service';

@Component({
    selector: 'app-group-search',
    templateUrl: './group-search.component.html',
    styleUrls: ['./group-search.component.css']
})
export class GroupSearchComponent implements OnInit {

    isHandset$: Observable<boolean>;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private hamburgerService: HamburgerToggleService) {
    }

    isOpen: boolean;

    ngOnInit() {
        this.hamburgerService.change.subscribe(isOpen => {
            this.isOpen = isOpen;
        })


        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(
                map(result => result.matches)
            );
    }
}
