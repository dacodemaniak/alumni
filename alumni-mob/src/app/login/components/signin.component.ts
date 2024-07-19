/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {

  public form: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      login: [
        '', // Default value for the control
        [
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  onSubmit(): void {
    console.log(`Bout to send ${JSON.stringify(this.form.value)}`)
  }
}
