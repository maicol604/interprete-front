import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { admin_service } from 'src/globals';
import { IAuthResponse } from '../interfaces/auth.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private _http = inject( HttpClient );

  onSingin( body: any ) {
    return this._http.post<IAuthResponse>( admin_service + '/auth/singin', body );
  }

}
