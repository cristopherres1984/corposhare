import {NgModule} from '@angular/core';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule
} from '@angular/material';

const materialModules = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSliderModule,
    MatExpansionModule,
    MatSelectModule
];

@NgModule({
    imports: materialModules,
    exports: materialModules
})
export class AppMaterialModule {
}
