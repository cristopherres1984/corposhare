import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {MatExpansionModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavContentComponent} from './sidenav-content.component';
import {GroupService} from '../../services';

describe('SidenavChatComponent', () => {
    let component: SidenavContentComponent;
    let fixture: ComponentFixture<SidenavContentComponent>;
    const groups = [{id: 1, name: 'one', description: 'one description', distance: 3}];

    beforeEach(async(() => {
        const groupService = jasmine.createSpyObj<GroupService>('GroupService', ['getGroups']);
        groupService.getGroups.and.returnValue(of(groups));

        TestBed.configureTestingModule({
            imports: [MatExpansionModule, NoopAnimationsModule],
            declarations: [SidenavContentComponent],
            providers: [{provide: GroupService, useValue: groupService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidenavContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
