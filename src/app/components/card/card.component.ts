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

  
}
