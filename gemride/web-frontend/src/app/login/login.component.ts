import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService, Credentials} from '../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hidePassword = true;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    /**
     * Action for 'login' button
     */
    onLogin() {
        this.authService.login(
            new Credentials(this.login.value, this.password.value),
            () => {
                this.router.navigateByUrl('/');
            });
        return false;
    }

    /**
     * Login field value
     */
    get login() {
        return this.loginForm.get('login');
    }

    /**
     * Password field value
     */
    get password() {
        return this.loginForm.get('password');
    }

    /**
     * Get error message associated with login field
     */
    getLoginErrorMessage() {
        return this.login.hasError('required') ? 'You must enter a value' : '';
    }

    /**
     * Get error message associated with password field
     */
    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }
}
