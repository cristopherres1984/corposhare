import {async, inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

import {AuthService} from './auth.service';
import {Credentials, Principal} from './principal';

describe('AuthService', () => {
    let httpTestingController: HttpTestingController;
    let httpClient: HttpClient;
    let authService: AuthService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });
    }));

    beforeEach(() => {
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        authService = TestBed.get(AuthService);
    });

    afterEach(() => {
        // after every test, assert that there are no more pending requests
        httpTestingController.verify();
    });

    it('should be created', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));

    it('should login', () => {
        const credentials = {user: 'user', password: 'pass'} as Credentials;

        authService.login(credentials, undefined);

        const req = httpTestingController.expectOne(authService.authUrl);
        expect(req.request.method).toEqual('GET');

        // Respond with the mock
        const response = {
            'authorities': [],
            'details': {'remoteAddress': '127.0.0.1', 'sessionId': null},
            'authenticated': true,
            'principal': {
                'password': null,
                'username': 'user',
                'authorities': [],
                'accountNonExpired': true,
                'accountNonLocked': true,
                'credentialsNonExpired': true,
                'enabled': true
            },
            'credentials': null,
            'name': 'user'
        };
        req.flush(response);

        expect(authService.principal).toEqual(new Principal(true, []));
    });
});
