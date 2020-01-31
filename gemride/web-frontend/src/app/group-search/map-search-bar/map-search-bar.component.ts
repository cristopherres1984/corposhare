import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {AutocompleteApiService, GeocoderApiService, MapsApiService} from '../../map';

@Component({
    selector: 'app-map-search-bar',
    templateUrl: './map-search-bar.component.html',
    styleUrls: ['./map-search-bar.component.css']
})
export class MapSearchBarComponent implements OnInit {

    options: Observable<string[]>;

    searchField: FormControl;

    constructor(private mapsApiService: MapsApiService,
                private autocompleteApiService: AutocompleteApiService,
                private geocoderApiService: GeocoderApiService) {
    }


    ngOnInit() {

        this.searchField = new FormControl();

        this.options = this.searchField.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(
                    value =>
                        this.autocompleteApiService.getQueryStringPredictions(value))
            );
    }


    onEnter(value: string) {

        this.mapsApiService.clearMarkers();
        this.geocoderApiService.getGeocodeByAddress(value)
            .subscribe(
                geocoderResult => {
                    const location = geocoderResult.geometry.location;

                    this.mapsApiService.setMapCenter(location);

                    this.mapsApiService.createMarker({

                        position: location,

                        animation: google.maps.Animation.DROP,
                        draggable: true
                    });


                    this.mapsApiService.createMarker({
                        position: {lat: 54.344, lng: 18.576},
                        animation: google.maps.Animation.BOUNCE,
                        draggable: true,
                        icon : "../../assets/icons/gIcon.png"
                    });

                    this.mapsApiService.createMarker({
                        position: {lat: 54.252, lng: 18.636},
                        animation: google.maps.Animation.BOUNCE,
                        draggable: true,
                        icon : "../../assets/icons/gIcon.png"
                    });

                    this.mapsApiService.createMarker({
                        position: {lat: 54.382, lng: 18.616},
                        animation: google.maps.Animation.BOUNCE,
                        draggable: true,
                        icon : "../../assets/icons/gIcon.png"

                    });

                    this.mapsApiService.createMarker({
                        position: {lat: 54.482, lng: 18.548},
                        animation: google.maps.Animation.BOUNCE,
                        draggable: true,
                        icon : "../../assets/icons/gIcon.png"
                    });

                    this.mapsApiService.createMarker({
                        position: {lat: 54.374, lng: 18.679},
                        animation: google.maps.Animation.BOUNCE,
                        draggable: true,
                        icon : "../../assets/icons/gIcon.png"
                    });

                    this.mapsApiService.createMarker({
                        position: {lat: 54.430, lng: 18.565},
                        animation: google.maps.Animation.BOUNCE,
                        draggable: true,
                        icon : "../../assets/icons/gIcon.png"
                    });

                    // this.addGroupMarkers();
                });
    }

    onClear() {
        this.mapsApiService.clearMarkers();
        this.searchField.setValue('');
    }

    onSelected(event: MatAutocompleteSelectedEvent) {
        this.onEnter(event.option.value);
    }
}
