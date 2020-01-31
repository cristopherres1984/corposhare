import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {HandleError, HttpErrorHandlerService} from './http-error-handler.service';
import {Group} from './group';

@Injectable({providedIn: 'root'})
export class GroupService {

    private readonly handleError: HandleError;

    groupUrl = '/api/groups';

    constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
        this.handleError = httpErrorHandler.createHandleError('GroupService');
    }

    /**
     * Get list of groups.
     */
    getGroups(): Observable<Group[]> {
        return this.httpClient.get<Group[]>(this.groupUrl)
            .pipe(
                catchError(this.handleError('getGroups', []))
            );
    }
}
