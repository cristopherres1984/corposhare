import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * Interceptor to set HTTP basic authentication header 'X-Requested-With'
 */
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xhr = req.clone({setHeaders: {'X-Requested-With': 'XMLHttpRequest'}});
        return next.handle(xhr);
    }
}
