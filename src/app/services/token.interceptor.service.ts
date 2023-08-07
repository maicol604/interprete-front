import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private _cookieSvc = inject( CookieService );

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = req.headers.set( 'Authorization', 'Bearer ' + this._cookieSvc.get('token') );

    const newRequest = req.clone({ headers });

    return next.handle(newRequest);
  }
}
