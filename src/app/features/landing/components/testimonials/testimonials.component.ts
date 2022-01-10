import { Component, OnInit } from '@angular/core';

interface Testimonials {
  icon: string,
  name: string,
  time: string,
  body: string
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: Testimonials[] = [
    {
      icon: 'account_circle',
      name: 'Felipe Midas',
      time: '1h ago',
      body: 'Me gusta utilizar la aplicación es simple y fácil de usar.'
    },
    {
      icon: 'account_circle',
      name: 'Tania Quijada',
      time: '1h ago',
      body: 'Me encantó desde el primer día, ya que encontré apoyo en todos los ámbitos de mi aprendizaje.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
