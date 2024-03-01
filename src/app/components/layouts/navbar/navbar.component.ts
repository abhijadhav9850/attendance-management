import { Component } from '@angular/core';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextInputComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  show_sidebar = true;
  show_search= true
}
