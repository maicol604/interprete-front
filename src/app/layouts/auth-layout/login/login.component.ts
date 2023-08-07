import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  singin$?: Subscription;

  private _authsvc = inject( AuthService );
  private _cookiesvc = inject( CookieService );
  private _router = inject( Router );

  frmLogin = new UntypedFormGroup({});
  submitted = false;
  fieldTextType = true;
  loading = false;

  private _formBuilder = inject( UntypedFormBuilder );

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.frmLogin = this._formBuilder.group({
      username    : [ '', [ Validators.required ] ],
      password : [ '', [ Validators.required ] ],
    });
  }

  get f() { return this.frmLogin.controls }
  touched( field: string ) { return this.frmLogin.get(field)?.touched ?? false }

  get values(): { username: string; password: string; } {
    return this.frmLogin.value;
  }

  get invalid(){ return this.frmLogin.invalid }

  onSubmit() {

    if( this.invalid || this.loading ) return;

    this.singin$ = this._authsvc.onSingin( this.values )
    .subscribe( (response) => {

      const { data, token } = response;

      this._cookiesvc.set('token', token);

      this._router.navigateByUrl('/dashboard');

      console.log('response ::: ', response);

      this.singin$?.unsubscribe();
    } );

  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.singin$?.unsubscribe();
  }

}
