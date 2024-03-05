import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/inputs/dropdown/dropdown.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-leave-tracker',
  standalone: true,
  imports: [DropdownComponent, NgFor, CommonModule],
  templateUrl: './leave-tracker.component.html',
})
export class LeaveTrackerComponent {
  leaves: any = [
    { title: 'Casual Leave', img_url: '../../../assets/casual.png', leave_available: 2, leave_booked: 2 },
    { title: 'Leave Without Pay', img_url: '../../../assets/without.png', leave_available: 2, leave_booked: 0 },
    { title: 'Sabbatical Leave', img_url: '../../../assets/Sabbatical.png', leave_available: 3, leave_booked: 0 },
    { title: 'Sick Leave', img_url: '../../../assets/sick.png', leave_available: 2, leave_booked: 1 },
  ]

  leave_and_holidays: any = [
    { date: "08 Mar,Fri", name: "Mahashivratri" },
    { date: "25 Mar,Mon", name: "Holi" },
    { date: "09 Apr,Tue", name: "Gudhi Padwa" },
    { date: "17 Apr,Wed", name: "Ram Navmi" },
    { date: "01 May,Wed", name: "Maharashrtra Day" },
    { date: "15 Aug,Thu", name: "Independance Day" },
    { date: "07 Sep,Sat", name: "Ganesh Chaturti" },
    { date: "01 Nov,Fri", name: "Lakshmi Pujan" },
    { date: "02 Nov,Sat", name: "Bali Pratipada" },
    { date: "08 Mar,Fri", name: "Mahashivratri" },
    { date: "25 Dec,Wed", name: "Christmas" },
  ]

  selected_tab: string = 'Upcoming';

  toggle_tab(tab: string) {
    this.selected_tab = tab;
  }
}
