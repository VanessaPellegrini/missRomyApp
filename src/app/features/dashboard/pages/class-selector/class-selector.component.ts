import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.css']
})
export class ClassSelectorComponent implements OnInit {
  title: string = 'selecciona tu proxima clase'
  constructor() { }

  ngOnInit(): void {
  }

}
