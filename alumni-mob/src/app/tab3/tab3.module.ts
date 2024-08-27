import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { Tab1PageModule } from "../tab1/tab1.module";
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    Tab3PageRoutingModule,
    Tab1PageModule
],
  declarations: [Tab3Page, ChatComponent]
})
export class Tab3PageModule {}
