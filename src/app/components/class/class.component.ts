import { Component, Input, OnInit } from '@angular/core';

export interface Program {
  course: string,
  hour: string,
  date: string,
  mode: string
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() data: Program[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
