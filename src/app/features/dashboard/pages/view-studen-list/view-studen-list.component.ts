import { Component, OnInit } from '@angular/core';
import { CardStudents } from '../../components/card-student/card-student.component';
import { DBService } from '../../../../core/services/db.service';

@Component({
  selector: 'app-view-studen-list',
  templateUrl: './view-studen-list.component.html',
  styleUrls: ['./view-studen-list.component.css']
})
export class ViewStudenListComponent implements OnInit {
  cards: CardStudents[] = [];
  title: string = 'Lista de Estudiantes'
  constructor(private _dbService:DBService) {
    this._dbService.get("estudiante").subscribe( (data) => {
      this.cards=data
    })
   }

  ngOnInit(): void {
  }
  

}
