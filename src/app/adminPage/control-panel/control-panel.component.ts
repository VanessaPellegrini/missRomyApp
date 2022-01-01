import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
  }

}
