import { Component, OnInit } from '@angular/core';

interface Text {
  title: string,
  step1: string,
  step2:string,
  step3:string,
  step4:string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  texts: Text[] = [
    {
      title:'Paso a Paso', 
    step1: '1 - Nos cuentas qué necesitas reforzar.',
    step2:'2 - Generamos un vínculo contigo en donde prima la transparencia y la confianza, y comenzamos la planificación.', 
    step3:'3 - Coordinamos como realizaremos la atención, puedes elegir presencial u online.',
    step4:'4 - Accedes al panel de control para gestionar todo tu método de aprendizaje.'
  },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
