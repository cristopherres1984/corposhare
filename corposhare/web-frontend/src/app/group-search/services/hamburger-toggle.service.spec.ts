import {TestBed} from '@angular/core/testing';

import {HamburgerToggleService} from './hamburger-toggle.service';

describe('HamburgerToggleService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: HamburgerToggleService = TestBed.get(HamburgerToggleService);
        expect(service).toBeTruthy();
    });
});
