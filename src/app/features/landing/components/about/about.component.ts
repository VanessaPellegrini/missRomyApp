import { Component, OnInit } from '@angular/core';

interface Text {
  title: string,
  body: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  texts: Text[] = [
    {title:'Large Body', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus libero harum dignissimos culpa sed quia labore, consequuntur iste earum eveniet, dolores at laudantium a, maxime hic suscipit atque optio commodi.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
