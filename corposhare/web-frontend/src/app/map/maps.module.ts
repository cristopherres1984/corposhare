import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapsComponent} from './maps.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MapsComponent],
    exports: [MapsComponent]
})
export class MapsModule {
}
