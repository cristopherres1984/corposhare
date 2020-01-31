import {async, inject, TestBed} from '@angular/core/testing';

import {HttpErrorHandlerService} from './http-error-handler.service';

describe('HttpErrorHandlerService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [HttpErrorHandlerService]
        }).compileComponents();
    }));

    it('should be created', inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
        expect(service).toBeTruthy();
    }));
});
