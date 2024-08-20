import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InternComponent } from './components/intern/intern.component';
import { PostComponent } from './components/post/post.component';
import { PostContentComponent } from './components/post-content/post-content.component';



@NgModule({
  declarations: [
    InternComponent,
    PostComponent,
    PostContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InternComponent,
    PostComponent,
    PostContentComponent
  ]
})
export class SharedModule { }
