import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {HandleError, HttpErrorHandlerService} from './http-error-handler.service';
import {Credentials, Principal} from './principal';

/**
 * Authentication service
 */
@Injectable({providedIn: 'root'})
export class AuthService {

    private readonly handleError: HandleError;

    authUrl = '/api/user';
    // principalLogoutUrl = '/logout';

    principal: Principal = new Principal(false, []);

    constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
        this.handleError = httpErrorHandler.createHandleError('AuthService');
    }

    /**
     * Login HTTP request
     *
     * @param credentials
     * @param callback
     */
    login(credentials: Credentials, callback) {

        const headers = new HttpHeaders(
            credentials ?
                {authorization: 'Basic ' + btoa(credentials.user + ':' + credentials.password)}
                : {});

        this.httpClient.get<any>(this.authUrl, {headers: headers})
            .pipe(
                catchError(this.handleError('login', [])))
            .subscribe(response => {
                if (response['name']) {
                    this.principal = new Principal(response['authenticated'], response['authorities']);
                    return callback && callback();
                } else {
                    this.principal = new Principal(false, []);
                    return;
                }
            });
    }

    /**
     * TODO [BH2018-7] add logout
     */
    // logout() {
    //     this.httpClient.post(this.principalLogoutUrl, {}).finally(() => {
    //         this.app.authenticated = false;
    //         this.router.navigateByUrl('/login');
    //     }).subscribe();
    // }
}
