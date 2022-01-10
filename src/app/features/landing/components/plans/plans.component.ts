import { Component, OnInit } from '@angular/core';

interface Plan {
  title: string,
  body: string,
  price: string
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plans: Plan[] = [
    {
      title: 'Plan S', 
      body: 'Plan de 6 clases, puedes cursar los ramos que desees reforzar. Cada clase es de 1.5hs.',
      price: '$120.000'
    },
    {
      title: 'Plan M', 
      body: 'Plan de 12 clases, puedes cursar los ramos que desees reforzar. Cada clase es de 1.5hs.',
      price: '$240.000'
    },
    {
      title: 'Plan L', 
      body: 'Plan de 24 clases, puedes cursar los ramos que desees reforzar. Cada clase es de 1.5hs.',
      price: '$480.000'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
