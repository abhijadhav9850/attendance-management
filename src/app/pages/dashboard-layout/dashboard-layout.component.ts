import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/layouts/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/layouts/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,RouterOutlet,CommonModule],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {

}
