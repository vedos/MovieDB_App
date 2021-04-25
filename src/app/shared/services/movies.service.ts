import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SingleItem } from '../models/single-iItem';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(search:string="", take:string="", page:string="") {
    let query: string="";


    if(search != "")
      query+="search="+search;

    if(take != ""){
      query+= search!="" ? "&":"";
      query+="take="+take;
    }

    if(page != ""){
      query+= take!="" ? "&":"";
      query+="page="+page;
    }

    if(query!="")
      query = query.replace (/^/,'?');

    return this.http.get<SingleItem[]>(`${environment.apiUrl}/movie${query}`);
  }
}
