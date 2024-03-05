import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/inputs/dropdown/dropdown.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-leave-tracker',
  standalone: true,
  imports: [DropdownComponent,NgFor],
  templateUrl: './leave-tracker.component.html',
})
export class LeaveTrackerComponent {
   leave_and_holidays:any = [
    {date:"08 Mar,Fri", name:"Mahashivratri"},
    {date:"25 Mar,Mon", name:"Holi"},
    {date:"09 Apr,Tue", name:"Gudhi Padwa"},
    {date:"17 Apr,Wed", name:"Ram Navmi"},
    {date:"01 May,Wed", name:"Maharashrtra Day"},
    {date:"15 Aug,Thu", name:"Independance Day"},
    {date:"07 Sep,Sat", name:"Ganesh Chaturti"},
    {date:"01 Nov,Fri", name:"Lakshmi Pujan"},
    {date:"02 Nov,Sat", name:"Bali Pratipada"},
    {date:"08 Mar,Fri", name:"Mahashivratri"},
    {date:"25 Dec,Wed", name:"Christmas"},
   ]
}
