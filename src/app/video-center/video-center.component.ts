import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  videos:Video[] =[];
  SelectedVideo:Video
  constructor(private _videoService:VideoService) {
  }
  ngOnInit(): void {
    this._videoService.getVideos()
        .subscribe(resVideoData => {
          for(const d of (resVideoData as any)){
            this.videos.push(d)
          }
        })
  }

  onSelectVideo(video:Video){
    this.SelectedVideo = video;
    console.log(this.SelectedVideo)
  }

}
