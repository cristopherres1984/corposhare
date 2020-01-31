import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MapsApiService} from './maps-api/maps-api.service';
import MapOptions = google.maps.MapOptions;

@Component({
    selector: 'app-map',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    // html map element
    @ViewChild('googlemap')
    mapElement: ElementRef;
    // map object
    map: google.maps.Map;

    @Input()
    initialLat = 54.351348;
    @Input()
    initialLng = 18.636406;
    @Input()
    initialZoom = 11;
    @Input()
    createMarkerFlag = false;

    constructor(private mapsApiService: MapsApiService) {
    }

    ngOnInit() {

        const mapOptions: MapOptions = {
            center: new google.maps.LatLng(this.initialLat, this.initialLng),
            zoom: this.initialZoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // create map
        this.mapsApiService.createMap(this.mapElement, mapOptions);

        // create marker if defined
        if (this.createMarkerFlag) {
            this.mapsApiService.createMarker({
                position: new google.maps.LatLng(this.initialLat, this.initialLng)
            });
        }
    }
}
