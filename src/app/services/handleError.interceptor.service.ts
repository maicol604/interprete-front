import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UiService } from './ui.service';
import { EIconAlert } from '../interfaces/alertIcon.enum';


@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {

  private _uisvc = inject( UiService );


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
    .pipe(

      catchError( (httpErr: HttpErrorResponse) => {

        console.log('handle error ::: ', httpErr.error);

        let message = 'Error no encontrado';
        let icon = EIconAlert.warning;

        if( httpErr.status == 400 ){
          message = httpErr.error.message ?? 'Revise la info del formulario';
          icon = EIconAlert.error;
        }

        if( httpErr.status == 401 )
          message = httpErr.error.message ?? 'Usuario no authorizado';

        if( httpErr.status == 403 )
          message = httpErr.error.message ?? 'Revise la info del formulario';

        if( httpErr.status == 404 )
          message = httpErr.error.message ?? 'Not found exception';

        if( httpErr.status == 422 )
          message = httpErr.error.message ?? 'Revise la info del formulario';

        this._uisvc.onShowAlert( message, icon );

        throw new Error(httpErr.error.message);

      } )

     );
  }

}
