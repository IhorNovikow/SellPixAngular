import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  content: string = 'profile';
  constructor() {}
  ngOnInit(): void {
  }
}
//li-navigation-box-active
