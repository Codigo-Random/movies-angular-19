import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from './services/movies.service';
import { AsyncPipe } from '@angular/common';
import { MovieCardComponent } from "./componets/movie-card/movie-card.component";
import { MenuComponent } from "./componets/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, MovieCardComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies';
  dataMovies$!: Observable<any>;

  private movieService = inject(MoviesService);

  constructor() {
    this.dataMovies$ = this.movieService.getMovies();
  }

}
