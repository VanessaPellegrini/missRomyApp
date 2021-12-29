import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
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
