import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { HomeComponent } from './components/home/home.component';
import { SingleItemComponent } from './components/single-item/single-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    SingleItemComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class SharedModule { }
