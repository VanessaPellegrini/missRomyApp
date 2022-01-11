import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  @Input() addClassForm: FormGroup;
  @Input() asignature: FormControl;
  @Input() teacher: FormControl;
  @Input() link: FormControl;
  @Input() number: FormControl;
  @Input() group: FormControl;
  @Input() hour: FormControl;
  @Input() day: FormControl;
  @Input() btnText: string;
  @Output() event = new EventEmitter();

  constructor()  { 

  }
  ngOnInit(): void {
  }

  send() {
    this.event.emit();
  }

}
