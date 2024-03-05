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
  more_options:any= false;


  more:any=[
    {title:'Performance'},
    {title:'Files'},
    {title:'Organization'},
    {title:'Travel'},
    {title:'Tasks'},
    {title:'Cases'},
    {title:'Employee Engagement'},
    {title:'HR Letters'},
    {title:'Onboarding'},
  ]

}
