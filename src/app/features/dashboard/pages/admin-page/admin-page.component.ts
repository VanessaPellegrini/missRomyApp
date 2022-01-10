import { Component, OnInit } from '@angular/core';
import { Program } from '../../components/class/class.component';
import { Report } from '../../components/last-tickets/last-tickets.component';
import { Options } from '../../components/options/options.component';
import { History } from '../../components/class-history/class-history.component';
import { DBService } from '../../services/db.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  menu: Options[] = [
    { option: 'Crear Clase', link: 'crear-clase'},
    { option: 'Crear Usuario', link: 'crear-usuario' },
  ];

  data: any[] = [];

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
  ]
  report: Report[] = [
    {
      user: 'Usuario',
      date: 'dia del reporte',
      report: 'comentarios, motivos...'
    }
  ]


  constructor(private _cService: DBService) { 
    this._cService.get("clase").subscribe( (data) => {
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
