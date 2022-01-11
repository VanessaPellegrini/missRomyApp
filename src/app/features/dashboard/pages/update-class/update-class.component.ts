import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DBService } from '../../../../core/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassInterface } from 'src/app/core/interfaces/class.interface';


@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {

  myParam: any;

  addClassForm: FormGroup;
  asignature: FormControl;
  teacher: FormControl;
  link: FormControl;
  number: FormControl;
  group: FormControl;
  hour: FormControl;
  day: FormControl;
  
  url: string = 'url.com';
  title: string = 'Modificar Clase';
  btnText: string = 'MODIFICAR';
  
  constructor(
    private classService: DBService, 
    private route: ActivatedRoute,
    private _router: Router
  ) { 
    this.addClassForm = new FormGroup({
      asignature: this.asignature = new FormControl('', [Validators.required]),
      teacher: this.teacher = new FormControl('', [Validators.required]),
      link: this.link = new FormControl('', [Validators.required]),
      number: this.number = new FormControl('', [Validators.required]),
      group: this.group = new FormControl('', [Validators.required]),
      hour: this.hour = new FormControl('', [Validators.required]),
      day: this.day = new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.myParam = params['key']);
  }

  send(){
    const data: ClassInterface = {
      asignature: this.asignature.value,
      teacher: this.teacher.value,
      link: this.link.value,
      number: this.number.value,
      group: this.group.value,
      hour: this.hour.value,
      day: this.day.value
    }
    this.classService.update("clase",data.asignature,data);
    this._router.navigate(["dashboard"])
  }

}

