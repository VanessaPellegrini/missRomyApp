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
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit saepe excepturi voluptatum.',
      price: '$120.000'
    },
    {
      title: 'Plan S', 
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit saepe excepturi voluptatum.',
      price: '$120.000'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
