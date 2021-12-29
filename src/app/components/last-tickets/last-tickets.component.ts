import { Component, Input, OnInit } from '@angular/core';

export interface Report {
  user: string,
  date: string,
  report: string
}

@Component({
  selector: 'app-last-tickets',
  templateUrl: './last-tickets.component.html',
  styleUrls: ['./last-tickets.component.css']
})
export class LastTicketsComponent implements OnInit {

  @Input() data : Report[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
