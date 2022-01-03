import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
