import {Component} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {AuthService} from './services';

@Component({selector: 'app-toolbar', template: ''})
class ToolbarStubComponent {
}

describe('AppComponent', () => {
    let authServiceStub: Partial<AuthService>;

    beforeEach(async(() => {
        // stub AuthService for test purposes
        authServiceStub = {};

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent, ToolbarStubComponent],
            providers: [{provide: AuthService, useValue: authServiceStub}]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
