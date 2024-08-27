/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { identity, take } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { WsChatService } from 'src/app/core/services/ws-chat.service';
import { SocketConnectionType } from 'src/app/tab3/dto/socket-connection.type';

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
    private _toastController: ToastController,
    private _router: Router,
    private _storage: StorageService,
    private _wsService: WsChatService
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
            this._storage.store('auth', response.body.token)
            this._router.navigate(['tabs', 'tab1'])
              .then(() => {
                console.log('Routing complete')
                this._wsService.connect()
                this._wsService.receiveIdentity()
                  .subscribe((identity: SocketConnectionType) => {
                    console.log(`Got ${identity.socketId} from Socket Server`)
                    // Send the ID of the Intern (splitting token for sample)
                    // Better return the full ID of the intern... but...
                    const userId: string = ((response.body.token) as string).split('.')[0]
                    const message: any = {
                      socketId: identity.socketId,
                      id: userId
                    }
                    this._wsService.sendIdentity(message)
                    this._wsService.sid = identity.socketId
                  })
              })
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
            toast.present().then(() => null)
            toast.onWillDismiss()
              .then(() => this.form.reset())
          }
        },
        error: (error: any) => {
          console.log(`ko, je dois afficher un toast ${JSON.stringify(error)}`)
        }
      })
  }
}
