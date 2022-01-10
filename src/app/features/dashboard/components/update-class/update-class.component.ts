import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../services/class.service';
import { NewClass } from '../crear-clase/crear-clase.component';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(
    private classService: ClassService, 
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
    console.log(this.myParam);
    
  }

  send(){
    const data: NewClass = {
      asignature: this.asignature.value,
      teacher: this.teacher.value,
      link: this.link.value,
      number: this.number.value,
      group: this.group.value,
      hour: this.hour.value,
      day: this.day.value
    }
    this.classService.updateClass(data.asignature,data);
    this._router.navigate(["dashboard"])
  }

}

