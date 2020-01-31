import {TestBed} from '@angular/core/testing';

import {MapsApiService} from './maps-api.service';

describe('MapsApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: MapsApiService = TestBed.get(MapsApiService);
        expect(service).toBeTruthy();
    });
});
