import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  hide:any= false;

}
