import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit, OnChanges {

  public editTitle: boolean = false;
  @Input() public video:Video


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }

}
