import {async} from '@angular/core/testing';

import {MapsModule} from './maps.module';

describe('MapsModule', () => {
    let mapsModule: MapsModule;

    beforeEach(async(() => {
        mapsModule = new MapsModule();
    }));

    it('should create an instance', () => {
        expect(mapsModule).toBeTruthy();
    });
});
