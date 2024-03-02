import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterLink],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  hide:any= false;

}
