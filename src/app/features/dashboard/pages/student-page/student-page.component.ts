import { Component, OnInit } from '@angular/core';
import { History } from '../../components/class-history/class-history.component';
import { DBService } from '../../../../core/services/db.service';
import { Report } from '../../components/last-tickets/last-tickets.component';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  data: any[] = [];
  text: string = 'Necesitas ayuda?';
  url: string = 'soporte';
  btnText: string = 'SOPORTE'

  history: History[] = [
    {
      course: 'PROGRAMACION',
      day: '11',
      month: 'diciembre',
      year: '2021',
      description:'Clase modalidad online'
    },
    {
      course: 'LENGUAJE',
      day: '10',
      month: 'diciembre',
      year: '2021' ,
      description:'Clase modalidad online'
    },    {
      course: 'FISICA',
      day: '9',
      month: 'diciembre',
      year: '2021' ,
      description:'Clase modalidad online'
    }
  ];

  constructor(private _cService: DBService) { 
    this._cService.get("clase").subscribe( (data:any) => {
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
