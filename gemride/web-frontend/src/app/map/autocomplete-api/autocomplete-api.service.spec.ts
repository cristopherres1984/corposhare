import {TestBed} from '@angular/core/testing';

import {AutocompleteApiService} from './autocomplete-api.service';

describe('AutocompleteApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AutocompleteApiService = TestBed.get(AutocompleteApiService);
        expect(service).toBeTruthy();
    });

    // TODO add tests
});
