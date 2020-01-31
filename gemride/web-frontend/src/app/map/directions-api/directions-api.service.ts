import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
import DirectionsRequest = google.maps.DirectionsRequest;
import DirectionsResult = google.maps.DirectionsResult;
import DirectionsService = google.maps.DirectionsService;

@Injectable({providedIn: 'root'})
export class DirectionsApiService {

    private directionsService: DirectionsService;

    constructor() {
        try {
            this.directionsService = new google.maps.DirectionsService;
        } catch (e) {
            throw new Error('Problem with initialization of google.maps.DirectionsService!');
        }
    }

    /**
     * Send request to google.maps.DirectionsService
     *
     * @param request DirectionsRequest
     * @return Observable<DirectionsResult>
     */
    getRoute(request: DirectionsRequest): Observable<DirectionsResult> {

        const sendResult = new Subject<DirectionsResult>();

        this.directionsService.route(
            request,
            ((result, status) => {
                    if (status.toString() === 'OK') {
                        sendResult.next(result);
                    } else {
                        sendResult.error('Directions request failed due to ' + status);
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
}
