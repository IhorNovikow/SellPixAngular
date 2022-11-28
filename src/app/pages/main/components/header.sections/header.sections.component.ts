import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-section',
  templateUrl: './header.sections.component.html',
  styleUrls: ['./header.sections.component.scss']
})

export class HeaderSectionComponent implements OnInit {
@Input() title: string;
@Input() navigation: string;

  constructor() { }

  ngOnInit(): void {
  }

}
