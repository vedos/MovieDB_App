import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SingleItemComponent,
    TvshowsComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
