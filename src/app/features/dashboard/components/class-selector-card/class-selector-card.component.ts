import { Component, OnInit } from '@angular/core';
import { DBService } from '../../../../core/services/db.service';

@Component({
  selector: 'app-class-selector-card',
  templateUrl: './class-selector-card.component.html',
  styleUrls: ['./class-selector-card.component.css']
})
export class ClassSelectorCardComponent implements OnInit {
  
  ramo: string = 'Matematicas';
  data: any[] = [];

  constructor(
    private db: DBService
  ) { 
    this.db.get("clase").subscribe( data => {
      this.data = data;
    })
   }

  ngOnInit(): void {
  }

}
