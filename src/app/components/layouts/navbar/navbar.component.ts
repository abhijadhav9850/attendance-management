import { Component } from '@angular/core';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [TextInputComponent,NgIf],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  show_sidebar = true;
  show_search = false;
}
