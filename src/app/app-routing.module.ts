import { MovieDetailsComponent } from './media/movie-details/movie-details.component';
import { PlaylistsComponent } from './media/playlists/playlists.component';
import { NewArrivalsComponent } from './media/new-arrivals/new-arrivals.component';
import { AddMovieComponent } from './media/add-movie/add-movie.component';
import { MoviesComponent } from './media/movies/movies.component';
import { HomeComponent } from './media/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Movies', component: MoviesComponent },
  { path: 'Movies/:title', component: MovieDetailsComponent },
  { path: 'New-Arrivals', component: NewArrivalsComponent },
  { path: 'Playlists', component: PlaylistsComponent },
  { path: 'Add-Movie', component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
