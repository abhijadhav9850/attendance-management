import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  hide: any = false;
  more_options: any = false;

  more: any = [
    { class: 'fa-solid fa-trophy text-lg', title: 'Performance' },
    { class: 'bx bx-file', title: 'Files' },
    { class: 'bx bx-buildings', title: 'Organization' },
    { class: 'bx bxs-plane-alt', title: 'Travel' },
    { class: 'bx bx-check-circle', title: 'Tasks' },
    { class: 'fa-regular fa-newspaper text-lg', title: 'Cases' },
    { class: 'bx bx-group', title: 'Employee Engagement' },
    { class: 'bx bx-star', title: 'HR Letters' },
    { class: 'fa-handshake fa-regular text-lg', title: 'Onboarding' },
    { class: 'fa-solid fa-layer-group text-lg', title: 'Customize Tabs' },
  ];
}
