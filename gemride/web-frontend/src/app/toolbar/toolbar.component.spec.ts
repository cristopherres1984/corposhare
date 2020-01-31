import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatIconModule, MatToolbarModule} from '@angular/material';

import {ToolbarComponent} from './toolbar.component';

describe('ToolbarComponent', () => {
    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatToolbarModule, MatIconModule],
            declarations: [ToolbarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
