import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './layout/header/top-nav/search/search.component';
import { TopNavComponent } from './layout/header/top-nav/top-nav.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { MediaComponent } from './media/media.component';
import { MoviesComponent } from './media/movies/movies.component';
import { TvShowsComponent } from './media/tv-shows/tv-shows.component';
import { PlaylistsComponent } from './media/playlists/playlists.component';
import { NewArrivalsComponent } from './media/new-arrivals/new-arrivals.component';
import { MediaCardComponent } from './media/media-card/media-card.component';

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
    TvShowsComponent,
    PlaylistsComponent,
    NewArrivalsComponent,
    MediaCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
