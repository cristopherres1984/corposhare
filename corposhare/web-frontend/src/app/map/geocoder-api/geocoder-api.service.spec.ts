import {TestBed} from '@angular/core/testing';

import {GeocoderApiService} from './geocoder-api.service';

describe('GeocoderApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: GeocoderApiService = TestBed.get(GeocoderApiService);
        expect(service).toBeTruthy();
    });

    // TODO add tests
});
