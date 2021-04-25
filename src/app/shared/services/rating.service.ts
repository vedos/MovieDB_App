import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RatingIn } from '../models/rating';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  rate(ratingIn: RatingIn) {
    console.log(ratingIn);
    
    let body:string = "MovieId=" + ratingIn.MovieId + "&Rate=" + ratingIn.Rate ;
    
    return this.http.post(`${environment.apiUrl}/rating`, body, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
  });
  }

}
