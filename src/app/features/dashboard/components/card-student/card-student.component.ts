import { Component, Input, OnInit } from '@angular/core';

export interface CardStudents {
  name: string,
  level: string,
  email: string,
  asignature: string[],
}

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.css']
})
export class CardStudentComponent implements OnInit {

  @Input() cards: CardStudents[] = []
  panelOpenState = false;


  constructor() { }

  ngOnInit(): void {
  }

}
