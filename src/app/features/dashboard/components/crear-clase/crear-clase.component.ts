import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendDataService } from '../../services/send-data.service';

export interface NewClass {
  asignature: string,
  teacher: string,
  link: string,
  number: number,
  group: string,
  hour: string,
  day: string
}

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

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
    private sendData: SendDataService,
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
    return this.sendData.send( data, this.url )
      // .subscribe((res: any) => {
      //   console.log(res);
      // });
  }

}
