import { Component, OnInit } from '@angular/core';
import { Program } from '../../components/class/class.component';
import { Report } from '../../components/last-tickets/last-tickets.component';
import { Options } from '../../components/options/options.component';
import { History } from '../../components/class-history/class-history.component';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  menuClases: Options[] = [
    { option: 'Crear Clase', link: 'crear-clase'},
    { option: 'Asignar Educador/Clase', link: 'asignar' },
    { option: 'Cargar Contenido', link: 'cargar-contenido'}
  ];

  menuEstudiantes: Options[] = [
    { option: 'Crear Usuario', link: 'crear-usuario' },
    { option: 'Asignar Educador/Clase', link: 'asignar' },
    { option: 'Cargar Contenido', link: 'cargar-contenido'}
  ];

  data: any[] = [];

  history: History[] = [
    {
      course: 'curso',
      day: 'dia',
      month: 'mes',
      year: 'anio' 
    }
  ]
  report: Report[] = [
    {
      user: 'Usuario',
      date: 'dia del reporte',
      report: 'comentarios, motivos...'
    }
  ]


  constructor(private _cService: ClassService) { 
    this._cService.item$.subscribe( (data) => {
      console.log(data);
      this.data=data
    }) 
  }

  ngOnInit(): void {
  }

}
