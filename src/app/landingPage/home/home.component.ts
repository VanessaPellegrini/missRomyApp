import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  menu: string[] = [
    'inicio',
    'beneficios',
    'planes',
    'testimonios',
    'contacto'
  ];
  title: string = 'MissRomy'

  constructor() { }

  ngOnInit(): void {
  }

}
