import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/inputs/search-input/search-input.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [SearchInputComponent,NgFor],
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent {
  services:any = [
    {image:"../../../assets/leave tracker.png", name:"Leave Tracker"},
    {image:"../../../assets/time tracker.png", name:"Time Tracker"},
    {image:"../../../assets/attandence.png", name:"Attendance"},
    {image:"../../../assets/File.png", name:"File"},
    {image:"../../../assets/Organization.png", name:"Organization"},
    {image:"../../../assets/Travel.png", name:"Travel"},
    {image:"../../../assets/Announcements.png", name:"Announcements"},
    {image:"../../../assets/Letters.png", name:"HR Letters"},
  ]
}
