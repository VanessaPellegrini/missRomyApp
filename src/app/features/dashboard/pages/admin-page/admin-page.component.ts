import { Component, OnInit } from '@angular/core';
import { Program } from '../../components/class/class.component';
import { Report } from '../../components/last-tickets/last-tickets.component';
import { Options } from '../../components/options/options.component';
import { History } from '../../components/class-history/class-history.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  menu: Options[] = [
    { option: 'Crear Clase', link: 'crear-clase'},
    { option: 'Crear Ususario', link: 'crear-usuario' },
    { option: 'Asignar Educador/Clase', link: 'asignar' },
    { option: 'Cargar Contenido', link: 'cargar-contenido'}
  ];
  data: Program[] = [
    { 
      course: 'curso',
      hour: 'hh:mm hrs',
      date: 'dia dd de mes',
      mode: 'www.url.com/class'
    },
    {
      course: 'curso',
      hour: 'hh:mm hrs',
      date: 'dia dd de mes',
      mode: 'www.url.com/class'
    }
  ];
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


  constructor() { }

  ngOnInit(): void {
  }

}
