import { Component, OnInit } from '@angular/core';
import { Program } from '../../components/class/class.component'
import { History } from '../../components/class-history/class-history.component';
import { Report } from '../../components/last-tickets/last-tickets.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  
  menu: any[] = [
    'Crear Clase',
    'Crear Ususario',
    'Asignar Educador/Clase',
    'Cargar Contenido'
  ];
  title: string = 'Bienvenido';
  name: string = 'Usuario';
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
