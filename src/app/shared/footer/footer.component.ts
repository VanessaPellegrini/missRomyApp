import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: string[] = [
    'Necesitas ayuda?',
    'correo@correo.cl',
    'Contactanos',
    '+569 xxxx xxxx'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
