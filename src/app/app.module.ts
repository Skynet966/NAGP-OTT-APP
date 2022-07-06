import { UserService } from './shared/services/user.service';
import { AuthUser } from './shared/services/auth.service';
import { UtilityHelper } from './shared/helpers/utility.helpers';
import { CategoriesService } from './shared/services/categories.service';
import { MoviesService } from './shared/services/movies.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './layout/header/top-nav/search/search.component';
import { TopNavComponent } from './layout/header/top-nav/top-nav.component';
import { CategoriesComponent } from './media/categories/categories.component';
import { MediaComponent } from './media/media.component';
import { MoviesComponent } from './media/movies/movies.component';
import { PlaylistsComponent } from './media/playlists/playlists.component';
import { NewArrivalsComponent } from './media/new-arrivals/new-arrivals.component';
import { MediaCardComponent } from './media/media-card/media-card.component';
import { HomeComponent } from './media/home/home.component';
import { AddMovieComponent } from './media/add-movie/add-movie.component';
import { MovieDetailsComponent } from './media/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavComponent,
    HeaderComponent,
    SearchComponent,
    TopNavComponent,
    CategoriesComponent,
    MediaComponent,
    MoviesComponent,
    PlaylistsComponent,
    NewArrivalsComponent,
    MediaCardComponent,
    HomeComponent,
    AddMovieComponent,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    MoviesService,
    CategoriesService,
    UtilityHelper,
    AuthUser,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
