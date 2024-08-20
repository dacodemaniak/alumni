/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, input, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InternType } from 'src/app/core/types/intern/intern-type';
import { PostType } from 'src/app/core/types/post/post.type';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { InternService } from 'src/app/core/services/intern.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss'],
})
export class InternComponent  implements OnInit {
  @Input()
  public intern!: InternType

  @Input()
  post: PostType | null = null

  constructor(
    private _popOverController: PopoverController,
    private _internService: InternService
  ) { }

  ngOnInit(): void {}

  async onMenuClick(event: any) {
    this._internService.intern = event
    const popOver = await this._popOverController.create(
      {
        component: UserMenuComponent,
        translucent: true,
        mode: 'ios',
        trigger: 'bottom-start',
        side: 'right',
        alignment: 'start'
      }
    )
    await popOver.present()
  }

}
