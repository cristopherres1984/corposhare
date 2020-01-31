import {Component, OnInit} from '@angular/core';
import {Group, GroupService} from '../../services';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-sidenav-content',
    templateUrl: './sidenav-content.component.html',
    styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

    groupList: Observable<Group[]>;
    myValue = 9;

    constructor(private groupsService: GroupService) {
    }

    ngOnInit() {
        this.groupList = this.groupsService.getGroups()
            .pipe(
                map(value => value.filter((group) => group.distance <= this.myValue))
            );
    }
}
