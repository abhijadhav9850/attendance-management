import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/inputs/dropdown/dropdown.component';

@Component({
  selector: 'app-leave-tracker',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './leave-tracker.component.html',
})
export class LeaveTrackerComponent {

}
