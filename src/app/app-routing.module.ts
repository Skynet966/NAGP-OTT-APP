import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './media/movie-details/movie-details.component';
import { PlaylistsComponent } from './media/playlists/playlists.component';
import { NewArrivalsComponent } from './media/new-arrivals/new-arrivals.component';
import { AddMovieComponent } from './media/add-movie/add-movie.component';
import { MoviesComponent } from './media/movies/movies.component';
import { HomeComponent } from './media/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guards';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Movies', component: MoviesComponent },
  { path: 'Movies/:title', component: MovieDetailsComponent },
  { path: 'New-Arrivals', component: NewArrivalsComponent },
  {
    path: 'Playlists',
    component: PlaylistsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Add-Movie', component: AddMovieComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
