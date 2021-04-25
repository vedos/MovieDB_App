import { Component, Input, OnInit } from '@angular/core';
import { SingleItem } from '../../models/single-iItem';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() item?: SingleItem;

  constructor() { }

  ngOnInit(): void {  
  }

}
