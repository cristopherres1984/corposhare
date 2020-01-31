import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MapSearchBarComponent} from './map-search-bar.component';


describe('MapSearchBarComponent', () => {
    let component: MapSearchBarComponent;
    let fixture: ComponentFixture<MapSearchBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule,
                MatInputModule, NoopAnimationsModule, MatCardModule, MatIconModule],
            declarations: [MapSearchBarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapSearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
