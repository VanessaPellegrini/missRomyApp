import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SendMailService } from '../../services/send-mail.service';

interface Datos {
  name: string,
  email: string,
  phone: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup ;  
  name: FormControl;
  email: FormControl;
  phone: FormControl;

  constructor(
    private sendMail: SendMailService
  ) { 
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.phone = new FormControl('', [Validators.required, Validators.pattern(/[0-9+]/)]);
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      phone: this.phone,
    });
  }

  ngOnInit() {

  }

  send(){
    const data: Datos = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    }
    return this.sendMail.send( data )
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
