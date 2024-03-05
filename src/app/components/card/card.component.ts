import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './card.component.html',
  providers: [DatePipe]
})
export class CardComponent {
  now: Date = new Date();
  
  currentTime$:any= new Date();

  // constructor(public date:DatePipe) {
  //   this.currentTime$ = new Observable(observer => {
  //     setInterval(() => {
  //       observer.next(new Date());
  //     }, 1000);
  //   });
  // }

  card_data = [
    {
      title: 'Birthday',
      image:
        'https://www.shutterstock.com/image-vector/balloon-cartoon-style-bunch-balloons-600nw-1931584802.jpg',
      caption: 'No birthdays today',
    },
    {
      title: 'New Hires',
      image:
        'https://cdni.iconscout.com/illustration/premium/thumb/recruiting-and-hiring-managers-finding-candidates-2739198-2277522.png',
      caption: 'No New Joinees in past 15 days.',
    },
    {
      title: 'Favorites',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNz1VafwtqGwfMoDF-hoovafbBTPDAheq4dO2D_SkFnFp4FvcBZKi7qu9LRmwGHgKNEI&usqp=CAU',
      caption: 'No Favorites found.',
    },
    {
      title: 'Quick Links',
      image: 'https://cdn-icons-png.flaticon.com/512/282/282100.png',
      caption: 'Link 1',
    },
    {
      title: 'Request For Approval',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/010/856/652/small/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg',
      caption: 'No record found',
      cap: 'Pending',
      count: '0',
    },
    {
      title: 'Attendance',
      hrs: this.now,
      date: '1 Mar 2024',
      early: '00:05',
    },
  ];
  // constructor() {
  //   setInterval(() => {
  //     this.now = new Date();
  //   }, 1);
  // }
  
}
