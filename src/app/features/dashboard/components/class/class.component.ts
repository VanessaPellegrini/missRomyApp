import { Component, Input, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { Router } from '@angular/router';

export interface Program {
  asignature: string,
  hour: string,
  day: string,
  mode: string
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() data: any[]=[]
  constructor(private _cService: DBService, private _router:Router) {
  }

  ngOnInit(): void {
  }

  updateClass(key:any){
    this._router.navigate(["dashboard/modificar-clase", key])
  }

  deleteClass(key:any){
    this._cService.delete("clase",key);
  }

}
