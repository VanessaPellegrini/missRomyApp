import { Component, OnInit } from '@angular/core';

interface Content {
  icon: string,
  text: string
}

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  content: Content[] = [
    {icon: 'account_circle', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit deserunt dolor consectetur nisi harum illum necessitatibus adipisci odio sit velit iste voluptates ratione ut, natus quibusdam dolorum atque repellendus.'},
    {icon: 'account_circle', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit deserunt dolor consectetur nisi harum illum necessitatibus adipisci odio sit velit iste voluptates ratione ut, natus quibusdam dolorum atque repellendus.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
