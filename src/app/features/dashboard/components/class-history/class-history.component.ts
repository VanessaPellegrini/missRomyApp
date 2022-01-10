import { Component, Input, OnInit } from '@angular/core';

export interface History {
  course: string,
  day: string,
  month: string,
  year: string,
  description:string,
}

@Component({
  selector: 'app-class-history',
  templateUrl: './class-history.component.html',
  styleUrls: ['./class-history.component.css']
})
export class ClassHistoryComponent implements OnInit {

  @Input() data: History[] = [];
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
