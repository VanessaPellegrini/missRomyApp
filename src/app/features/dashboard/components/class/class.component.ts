import { Component, Input, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';

export interface Program {
  asignature: string,
  hour: string,
  day: string,
  mode: string,
  doc:string
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() data: any[]=[]
  constructor(private _cService: ClassService) {
    console.log(this.data, "componente");
    this.data.forEach(element => {
      console.log(element);
      
    });
   }

  ngOnInit(): void {
  }

  deleteClass(doc:any){
    this._cService.deleteClass(doc);
  }

}
