import {ElementRef, Injectable} from '@angular/core';
import MarkerOptions = google.maps.MarkerOptions;
import MapOptions = google.maps.MapOptions;
import Marker = google.maps.Marker;
import LatLng = google.maps.LatLng;
import DirectionsResult = google.maps.DirectionsResult;
import DirectionsRendererOptions = google.maps.DirectionsRendererOptions;
import DirectionsRenderer = google.maps.DirectionsRenderer;

@Injectable({providedIn: 'root'})
export class MapsApiService {

    private map: google.maps.Map;
    private directionsRenderer: google.maps.DirectionsRenderer;

    private markers: Marker[];

    constructor() {
        this.markers = [];
    }

    /**
     * Create google map
     *
     * @param mapElement html element for map
     * @param mapOptions map options
     */
    createMap(mapElement: ElementRef, mapOptions: MapOptions) {
        this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
    }

    /**
     * Center map on position
     *
     * @param position position
     */
    setMapCenter(position: LatLng): void {
        this.map.setCenter(position);
    }

    /**
     * Create marker on map
     *
     * @param markerOptions marker options
     */
    createMarker(markerOptions: MarkerOptions): Marker {
        markerOptions.map = this.map;
        const marker = new google.maps.Marker(markerOptions);

        this.markers.push(marker);

        return marker;

    }




    /**
     * Clear all markers from the map
     */
    clearMarkers() {
        this.markers.forEach(marker => marker.setMap(null));
        this.markers = [];
    }

    /**
     * Create route on map
     *
     * @param directionsResult route details
     * @param options route options
     */
    createRoute(directionsResult: DirectionsResult, options?: DirectionsRendererOptions) {

        if (!this.directionsRenderer) {
            // this.directionsRenderer = new DirectionsRenderer();
            // this.directionsRenderer.setMap(this.map);
        }

        if (options) {
            this.directionsRenderer.setOptions(options);
        }

        this.directionsRenderer.setDirections(directionsResult);
    }
}
