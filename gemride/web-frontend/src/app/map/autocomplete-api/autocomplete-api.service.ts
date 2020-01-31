import {Injectable, NgZone} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import AutocompleteService = google.maps.places.AutocompleteService;
import QueryAutocompletionRequest = google.maps.places.QueryAutocompletionRequest;
import QueryAutocompletePrediction = google.maps.places.QueryAutocompletePrediction;

@Injectable({providedIn: 'root'})
export class AutocompleteApiService {

    private autocompleteService: AutocompleteService;

    constructor(private ngZone: NgZone) {
        try {
            this.autocompleteService = new google.maps.places.AutocompleteService();
        } catch (e) {
            throw new Error('Problem with initialization of google.maps.places.AutocompleteService!');
        }
    }

    /**
     * Send request to google.maps.places.AutocompleteService
     *
     * @param queryRequest QueryAutocompletionRequest
     * @return Observable<QueryAutocompletePrediction[]>
     */
    getQueryPredictions(queryRequest: QueryAutocompletionRequest): Observable<QueryAutocompletePrediction[]> {

        const sendResult = new Subject<QueryAutocompletePrediction[]>();

        this.autocompleteService.getQueryPredictions(
            queryRequest,
            (result, status) => {
                if (status.toString() === 'OK') {
                    this.ngZone.run(
                        () => sendResult.next(result));
                } else {
                    sendResult.error('Autocomplete was not successful for the following reason: ' + status);
                }
            });

        return sendResult.asObservable()
            .pipe(catchError(
                (error: any): Observable<any> => {
                    console.error(error);
                    return of([]);
                }));
    }

    /**
     * Send request to google.maps.places.AutocompleteService with text only
     *
     * @param queryString text input
     * @return Observable<string[]>
     */
    getQueryStringPredictions(queryString: string): Observable<string[]> {

        if (!queryString || queryString === '') {
            return of([]);
        }

        return this.getQueryPredictions({input: queryString})
            .pipe(
                map(queryPredictions => {
                    const results: string[] = [];
                    queryPredictions.forEach(
                        prediction => {
                            results.push(prediction.description);
                        });
                    return results;
                })
            );
    }
}
