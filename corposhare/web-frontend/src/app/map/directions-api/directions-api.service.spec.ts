import {TestBed} from '@angular/core/testing';

import {DirectionsApiService} from './directions-api.service';

describe('DirectionsApiService', () => {
    let service: DirectionsApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(DirectionsApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // TODO add tests
});
