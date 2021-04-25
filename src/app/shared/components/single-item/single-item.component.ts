import { Component, Input, OnInit } from '@angular/core';
import { RatingIn } from '../../models/rating';
import { SingleItem } from '../../models/single-iItem';
import { RatingService } from '../../services';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() item?: SingleItem;

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {  
  }

  change($event: any){
    console.log($event, this.item?.id);

    let rate: RatingIn = new RatingIn();
    rate.MovieId = this.item?.id;
    rate.Rate = $event;
    
    this.ratingService.rate(rate).subscribe(
      data => {
        console.log(data);
        
      }
    );
  }

}
