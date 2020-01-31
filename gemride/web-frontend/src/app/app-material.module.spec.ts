import {async} from '@angular/core/testing';

import {AppMaterialModule} from './app-material.module';

describe('AppMaterialModule', () => {
    let appMaterialModule: AppMaterialModule;

    beforeEach(async(() => {
        appMaterialModule = new AppMaterialModule();
    }));

    it('should create an instance', () => {
        expect(appMaterialModule).toBeTruthy();
    });
});
