import {Component} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {GroupSearchComponent} from './group-search.component';
import {GroupService} from '../services';

@Component({selector: 'app-sidenav-content', template: ''})
class SidenavContentStubComponent {
}

@Component({selector: 'app-map-search-bar', template: ''})
class MapSearchBarStubComponent {
}

@Component({selector: 'app-map', template: ''})
class MapsStubComponent {
}

describe('GroupSearchComponent', () => {
    let component: GroupSearchComponent;
    let fixture: ComponentFixture<GroupSearchComponent>;
    const groups = [{id: 1, name: 'one', description: 'one description', distance: 3}];

    beforeEach(async(() => {
        // Create a fake GroupService object with a `getGroups()` spy
        const groupService = jasmine.createSpyObj<GroupService>('GroupService', ['getGroups']);
        // Make the spy return a synchronous Observable with the test data
        groupService.getGroups.and.returnValue(of(groups));

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MatSidenavModule, NoopAnimationsModule],
            declarations: [GroupSearchComponent, SidenavContentStubComponent, MapSearchBarStubComponent, MapsStubComponent],
            providers: [{provide: GroupService, useValue: groupService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
