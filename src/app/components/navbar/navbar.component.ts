import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  active: boolean = false;
  menu: string[] = [
    'inicio',
    'beneficios',
    'planes',
    'testimonios',
    'contacto'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(bool:boolean){
    return this.active = bool
    
  }

}
