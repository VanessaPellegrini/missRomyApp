import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: any[] = [
    { option: 'inicio', link: 'home'},
    { option: 'inicio sesión', link: 'login' },
    { option: 'beneficios', link: '' },
    { option: 'planes', link: ''},
    { option: 'testimonios', link: ''},
    { option: 'contacto', link: ''}
  ];


  title: string = 'MissRomy'

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
