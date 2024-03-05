import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  name:string= 'Rudra Belwalkar'
  email:any = 'rudrabelwalkar09@gmail.com';

  items:any[]=[
    {class : 'bx bx-rocket',title:'Getting Started'},
    {class : 'bx bx-question-mark',title:'Help'},
    {class : 'bx bx-headphone',title:'Contact Support'},
    {class : 'bx bx-headphone',title:"What's new"},
    {class : 'bx bx-group',title:'Join the HR Community'},
  ]
}
