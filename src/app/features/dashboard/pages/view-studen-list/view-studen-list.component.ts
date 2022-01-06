import { Component, OnInit } from '@angular/core';
import { CardStudents } from '../../components/card-student/card-student.component';

@Component({
  selector: 'app-view-studen-list',
  templateUrl: './view-studen-list.component.html',
  styleUrls: ['./view-studen-list.component.css']
})
export class ViewStudenListComponent implements OnInit {
  cards: CardStudents[] = [
    { 
      name: 'Name Surname', 
      level: '1 medio',
      email: 'name@surname.com',
      asignature: ['class1', 'class2', 'class3']
    },
    { 
      name: 'Name Surname2', 
      level: '2 medio',
      email: 'name@surname.com',
      asignature: ['class2', 'class4', 'class5']
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
