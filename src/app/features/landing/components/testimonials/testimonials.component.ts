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
      name: 'Name Surname',
      time: '1h ago',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit saepe excepturi voluptatum.'
    },
    {
      icon: 'account_circle',
      name: 'Name Surname',
      time: '1h ago',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit saepe excepturi voluptatum.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
