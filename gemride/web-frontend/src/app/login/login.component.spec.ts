import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {AuthService} from '../services';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authServiceStub: Partial<AuthService>;

    beforeEach(async(() => {
        // stub AuthService for test purposes
        authServiceStub = {};

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatCheckboxModule, MatCardModule,
                MatInputModule, NoopAnimationsModule, RouterTestingModule],
            declarations: [LoginComponent],
            providers: [FormBuilder, {provide: AuthService, useValue: authServiceStub}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('login form invalid when empty', () => {
        expect(component.login.value).toEqual('');
        expect(component.password.value).toEqual('');

        expect(component.login.valid).toBeFalsy();
        expect(component.password.valid).toBeFalsy();
        expect(component.loginForm.valid).toBeFalsy();
    });

    it('login form invalid after incorrect update', () => {
        expect(component.loginForm.valid).toBeFalsy();
        component.login.setValue('');
        component.password.setValue('');

        expect(component.loginForm.valid).toBeFalsy();
        expect(component.getLoginErrorMessage()).toEqual('You must enter a value');
        expect(component.getPasswordErrorMessage()).toEqual('You must enter a value');
    });

    it('login form valid after correct update', () => {
        expect(component.loginForm.valid).toBeFalsy();
        component.login.setValue('user');
        component.password.setValue('pass');
        expect(component.loginForm.valid).toBeTruthy();
    });
});
