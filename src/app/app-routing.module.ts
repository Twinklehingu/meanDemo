import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';


const routes: Routes = [
  // this is root path
  //localhost:3000, we can not match the partial path, we have to specified full 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  //localhost:3000/home
  {path:"home", component:HomeComponent},
  {path:"videos", component:VideoCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
