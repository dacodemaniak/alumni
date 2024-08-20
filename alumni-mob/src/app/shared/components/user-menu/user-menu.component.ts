import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InternService } from 'src/app/core/services/intern.service';
import { InternType } from 'src/app/core/types/intern/intern-type';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent  implements OnInit {

  private _intern: InternType | null = null

  constructor(
    private _popOverController: PopoverController,
    private _internService: InternService
  ) { }

  ngOnInit(): void {
    this._intern = this._internService.intern
  }

  onDetailClick(): void {
    this._popOverController.dismiss()
    console.log(`Show detail for ${this._intern?.lastname}`)
  }

  onChatClick(): void {
    this._popOverController.dismiss()
    console.log(`Chat with ${this._intern?.lastname}`)
  }

}
