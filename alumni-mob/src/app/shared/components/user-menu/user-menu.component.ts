import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { InternService } from 'src/app/core/services/intern.service';
import { InternType } from 'src/app/core/types/intern/intern-type';
import { ChatComponent } from 'src/app/tab3/components/chat/chat.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent  implements OnInit {

  private _intern: InternType | null = null

  constructor(
    private _popOverController: PopoverController,
    private _modalController: ModalController,
    private _internService: InternService
  ) { }

  ngOnInit(): void {
    this._intern = this._internService.intern
  }

  onDetailClick(): void {
    this._popOverController.dismiss()
    console.log(`Show detail for ${this._intern?.lastname}`)
  }

  async onChatClick() {
    this._popOverController.dismiss()
    // Let's start with modalController
    const chatModal = await this._modalController.create({
      component: ChatComponent
    })
    chatModal.present()

  }

}
