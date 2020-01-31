import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HamburgerToggleService} from "../group-search/services/hamburger-toggle.service";
import {MatSelectModule} from "@angular/material";

@Component({
  selector: 'app-group-manage',
  templateUrl: './group-manage.component.html',
  styleUrls: ['./group-manage.component.css']
})
export class GroupManageComponent implements OnInit {
    selected = 'option1';
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
