import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  videos:Video[] =[
    {"_id": "101","title":"Title 1","url":"URL 1", "description":"Description 2"},
    {"_id": "102","title":"Title 2","url":"URL 2", "description":"Description 2"},

    

  ];

  SelectedVideo:Video
  

  constructor() { }

  ngOnInit(): void {
   

    
  }

  onSelectVideo(video:Video){
    this.SelectedVideo = video;
    console.log(this.SelectedVideo)
  }

}
