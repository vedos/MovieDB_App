import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ShowType } from '../../models/show-type';
import { SingleItem } from '../../models/single-iItem';
import { MoviesService, TvShowsService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() search_param?: string;
  page:number=1;
  take:number=6;
  

  constructor(private moviesService: MoviesService, 
    private tvShowsService: TvShowsService ) { }

  items: SingleItem[] = [];
  type?: ShowType = ShowType.MOVIE;


  ngOnInit(): void {
    this.loadShows("",this.take.toString());
  }


  private loadShows(search:string="", take:string="", page:string="") {
    if (this.type == ShowType.MOVIE)
      this.loadMovies(search, take,page);
    else if (this.type == ShowType.TVSHOW)
      this.loadTvShows(search, take, page);
  }

  loadMovies(search:string,take:string="", page:string="")
  {
    this.moviesService.getTopRatedMovies(search, take, page).subscribe(
      data => {
        if(this.page != 1){
          data.forEach(element => {
            this.items.push(element);
          });
          
        }else{
          this.items = data;
        }
        
        
      },
      error => {
        // this.alertService.error(error);
      });
  }


  loadTvShows(search:string, take:string="", page:string="")
  {
    this.tvShowsService.getTopRatedTvShows(search, take, page).subscribe(
      data => {
        if(this.page != 1){
          data.forEach(element => {
            this.items.push(element);
          });
          
        }else{
          this.items = data;
        }      
      },
      error => {
        // this.alertService.error(error);
      });
  }

  changeShowType(){
    this.page=1;
    if(this.type == ShowType.MOVIE)
      this.type = ShowType.TVSHOW;
    else
      this.type = ShowType.MOVIE;

    this.loadShows("",this.take.toString());
  }

  getShowTypeName()
  {
    if(this.type == ShowType.MOVIE)
      return "Movies"
    else
      return "TV Shows"
  }

  getInvertedShowTypeName()
  {
    if(this.type == ShowType.MOVIE)
      return "TV Shows"
    else
      return "Movies"
  }

  ngOnChanges(changes: SimpleChanges) {
      if(changes.search_param.previousValue != changes.search_param.currentValue && (changes.search_param.currentValue.length > 1 ||  changes.search_param.currentValue=="")){
        this.page=1;
        this.loadShows(changes.search_param.currentValue,this.take.toString(),(this.page).toString())
      }
  }

  viewMore(){
    this.page++;
    this.loadShows(this.search_param,this.take.toString(),(this.page).toString())
  }
}
