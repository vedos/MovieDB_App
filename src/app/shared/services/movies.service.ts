import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(budget: SingleItem) {
    return this.http.get<SingleItem>(`${environment.apiUrl}/budget`, budget);
  }
}
