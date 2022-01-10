import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../../services/db.service';

export interface CardStudents {
  name: string,
  level: string,
  email: string,
  asignature: string[]
}

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.css']
})
export class CardStudentComponent implements OnInit {

  @Input() cards: any[] = []
  panelOpenState = false;


  constructor(
    private _router: Router,
    private _dbService: DBService
    ) { }

  ngOnInit(): void {
  }

  updateClass(key:any){
    this._router.navigate(["dashboard/modificar-clase", key])
  }

  deleteClass(key:any){
    this._dbService.delete("estudiante",key);
  }

}
