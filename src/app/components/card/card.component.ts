import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor,NgIf,DatePipe],
  templateUrl: './card.component.html',
  providers: [DatePipe]
})
export class CardComponent {  
  currentTime:any= new Date();
  events:any=[
    {img:"../../../assets/birthday-cake-birthday.svg",name:"Birthday"},
    {img:"../../../assets/employee-icon-6.jpg",name:"New Hires"},
    {img:"../../../assets/favorite-icon-png-8.jpg",name:"Favorites"},
    {img:"../../../assets/quicklinks.jpg",name:"Quick Links"},
    {img:"../../../assets/Announcements.png",name:"Announcements"},
    {img:"../../../assets/Upcoming Holidays.png",name:"Upcoming Holidays"},
  ]

  leave:any=[
    {leave:"Casual Leave", img:'../../../assets/casual.png',day1:1,day2:2},
    {leave:"Leave Without Pay", img:'../../../assets/without.png',day1:1,day2:2},
    {leave:"Sabbatical Leave", img:'../../../assets/Sabbatical.png',day1:1,day2:2},
    {leave:"Sick Leave", img:'../../../assets/sick.png',day1:1,day2:2},
  ]

  latitude: number=0
  longitude: number=0
  errorMessage: any=""

  constructor() { }

  get_location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.longitude);
          
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = "Error getting location.";
        }
      );
    } else {
      this.errorMessage = "Geolocation is not supported by this browser.";
    }
  }
  
}
