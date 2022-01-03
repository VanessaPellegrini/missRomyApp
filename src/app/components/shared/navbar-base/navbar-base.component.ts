import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-base',
  templateUrl: './navbar-base.component.html',
  styleUrls: ['./navbar-base.component.css']
})
export class NavbarBaseComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() nameValidator: boolean = false

  active: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(bool:boolean){
    return this.active = bool
    
  }
}
