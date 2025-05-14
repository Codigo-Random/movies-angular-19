import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private http = inject(HttpClient);

  token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWE1MjUxOGViYjAxNDJiYjI2MWExYTY2YTdmYjE0NCIsIm5iZiI6MS42Nzg3MDI0ODE2MzM5OTk4ZSs5LCJzdWIiOiI2NDBlZjc5MWVkZTFiMDAwZDk3NWFmZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.367xv5EV4ENIQ35PirNSWm-s9aJdTVSVirY_ZJHWLp8"
  baseUrl = "https://api.themoviedb.org/3"

  constructor() { }

  getMovies() {
    const url = `${this.baseUrl}/discover/movie`

    const headers = {
      Authorization: `Bearer ${this.token}`
    }

    return this.http.get<any>(url, { headers })
  }
}
