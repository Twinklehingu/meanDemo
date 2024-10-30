// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class VideoService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  // private apiUrl = 'http://localhost:3000/api/videos';
  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  private _putUrl = "/api/video/"

  constructor(private _http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'jwt-token'
    })
  }

  getVideos(){
    return this._http.get(this._getUrl)
  }

  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._postUrl, video, this.httpOptions)
        .pipe()
  }
  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._putUrl + video._id, video, this.httpOptions)
       .pipe()
  }
}