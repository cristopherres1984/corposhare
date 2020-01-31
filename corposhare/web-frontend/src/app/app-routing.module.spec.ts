import {async} from '@angular/core/testing';

import {AppRoutingModule} from './app-routing.module';

describe('AppRoutingModule', () => {
    let appRoutingModule: AppRoutingModule;

    beforeEach(async(() => {
        appRoutingModule = new AppRoutingModule();
    }));

    it('should create an instance', () => {
        expect(appRoutingModule).toBeTruthy();
    });
});
