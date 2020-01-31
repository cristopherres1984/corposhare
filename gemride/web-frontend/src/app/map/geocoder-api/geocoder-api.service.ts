import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import GeocoderResult = google.maps.GeocoderResult;
import GeocoderRequest = google.maps.GeocoderRequest;
import Geocoder = google.maps.Geocoder;

@Injectable({providedIn: 'root'})
export class GeocoderApiService {

    private geocoderService: Geocoder;

    constructor() {
        try {
            this.geocoderService = new google.maps.Geocoder();
        } catch (e) {
            throw new Error('Problem with initialization of google.maps.Geocoder!');
        }
    }

    /**
     * Send request to google.maps.Geocoder
     *
     * @param request GeocoderRequest
     * @return Observable<GeocoderResult[]>
     */
    getGeocode(request: GeocoderRequest): Observable<GeocoderResult[]> {

        const sendResult = new Subject<GeocoderResult[]>();

        this.geocoderService.geocode(
            request,
            ((result, status) => {
                    if (status.toString() === 'OK') {
                        sendResult.next(result);
                    } else {
                        sendResult.error('Geocode request failed due to ' + status);
                    }
                }
            ));

        return sendResult.asObservable()
            .pipe(catchError(
                (error: any): Observable<any> => {
                    console.error(error);
                    return of([]);
                }));
    }

    /**
     * Send request to google.maps.Geocoder with address only
     *
     * @param requestAddress address
     * @return Observable<GeocoderResult>
     */
    getGeocodeByAddress(requestAddress: string): Observable<GeocoderResult> {

        if (!requestAddress) {
            return of();
        }

        return this.getGeocode({'address': requestAddress})
            .pipe(
                map(result => result[0])
            );
    }
}
