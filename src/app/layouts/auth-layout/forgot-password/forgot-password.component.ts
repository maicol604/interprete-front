import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  passresetForm!: FormGroup;
  submitted = false;

  constructor(
    private _formBuilder: FormBuilder
  ) {

    this.passresetForm = this._formBuilder.group({
      email: ['', []],
    });

  }

  ngOnInit(): void {
  }

  get f() { return this.passresetForm.controls; }

  onSubmit() {

  }

}
