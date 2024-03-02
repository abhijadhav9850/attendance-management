import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { SearchInputComponent } from '../../inputs/search-input/search-input.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [SearchInputComponent,NgIf],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  show_sidebar = true;
  show_search = false;
  popup_open = true;
  show_apply_leave = true;
  show_travel_request = false;
  show_HR_letter = false
}
