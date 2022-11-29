import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'title-page',
  templateUrl: './titlePage.component.html',
  styleUrls: ['./titlePage.component.scss']
})
export class TitlePageComponent implements OnInit {
  @Input() title: string;
  @Input() afterWay: string;
  constructor() { }
  ngOnInit(): void {
  }
}
