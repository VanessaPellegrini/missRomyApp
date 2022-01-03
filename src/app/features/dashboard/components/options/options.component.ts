import { Component, Input, OnInit } from '@angular/core';

export interface Options {
  option: string,
  link: string
}

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() items: Options[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
