/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { take } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {

  public form: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LoginService,
    private _toastController: ToastController
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
    this._service.doLogin(this.form.value)
      .pipe(
        take(1)
      )
      .subscribe({
        next: async(response: HttpResponse<any>) => {
          if (response.status === 200) {
            console.log(`ok, afficher les posts`)
          } else {
            const toast = await this._toastController.create({
              message: response.body.message,
              duration: 2000,
              position: 'middle',
              buttons: [
                {
                  text: 'Réessayer',
                }
              ]
            })
            await toast.present()
            toast.onDidDismiss()
              .then(() => this.form.reset())
          }
        },
        error: (error: any) => {
          console.log(`ko, je dois afficher un toast ${JSON.stringify(error)}`)
        }
      })
  }
}
