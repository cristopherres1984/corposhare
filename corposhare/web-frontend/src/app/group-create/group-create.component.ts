import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {AutocompleteApiService, GeocoderApiService, MapsApiService} from "../map";
import {MatAutocompleteSelectedEvent} from "@angular/material";


@Component({
    selector: 'app-group-create',
    templateUrl: './group-create.component.html',
    styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

    waypointsList: number[] = [];
    wpNumber = 0;
    onAddClick() {
        this.wpNumber = this.wpNumber + 1;
        this.waypointsList.push(this.wpNumber);
    }

    searchFieldStartpoint: FormControl;
    searchFieldEndpoint: FormControl;
    searchFieldWaypoint: FormControl;

    optionsStart: Observable<string[]>;
    optionsEnd: Observable<string[]>;
    optionsWaypoint: Observable<string[]>;

    ngOnInit() {
        this.searchFieldStartpoint = new FormControl();
        this.searchFieldEndpoint = new FormControl();
        this.searchFieldWaypoint = new FormControl();

        this.optionsStart = this.searchFieldStartpoint.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(
                    value =>
                        this.autocompleteApiService.getQueryStringPredictions(value))
            );

        this.optionsWaypoint = this.searchFieldWaypoint.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(
                    value =>
                        this.autocompleteApiService.getQueryStringPredictions(value))
            );

        this.optionsEnd = this.searchFieldEndpoint.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap(
                    value =>
                        this.autocompleteApiService.getQueryStringPredictions(value))
            );
    }

    onEnter(value: string) {

        // this.mapsApiService.clearMarkers();

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

                    // this.addGroupMarkers();
                });
    }

    onClearStart() {
        // this.mapsApiService.clearMarkers();
        this.searchFieldStartpoint.setValue('');
    }

    onRemoveClick(i) {
        this.waypointsList.splice(i, 1);
        // this.searchFieldWaypoint.setValue('');
    }

    onClearEnd() {
        // this.mapsApiService.clearMarkers();
        this.searchFieldEndpoint.setValue('');
    }

    onSelected(event: MatAutocompleteSelectedEvent) {
        this.onEnter(event.option.value);
    }

    constructor(private mapsApiService: MapsApiService,
                private autocompleteApiService: AutocompleteApiService,
                private geocoderApiService: GeocoderApiService) {
    }

    showStartTime: string;
    onChangeRange(rangeValue: any) {
        this.showStartTime = rangeValue.value;
    }

    showReturnTime: string;
    onChangeRange2(rangeValue: any) {
        this.showReturnTime = rangeValue.value;
    }

    formatLabel(value: number | null) {
        if (!value) {
            return '12:00';
        }

        let decimalPart = +value.toString().replace(/^[^\.]+/, '0');
        let mm = decimalPart * 60;
        var mmPart = mm.toString().length == 1 ? mm.toString() + "0" : mm.toString();

        if (value >= 0) {
            let valueStr = value.toFixed(2);
            let strArr = valueStr.split(".");
            if (strArr[0].length == 1) {
                strArr[0] = "0" + strArr[0];
            }
            var hhPart = strArr[0];
            //console.log(strArr);
        }

        return hhPart + ":" + mmPart;
    }

}
