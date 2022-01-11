import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DBService } from '../../../../core/services/db.service';
import { AuthService } from '../../../../core/services/auth.service';

export interface NewUser {
  name: string,
  lastName: string,
  email: string,
  rut: string,
  street: string,
  number: number,
  apartment: string,
  block: string,
  comuna: string,
  city: string,
  level: number,
  group: string,
  tipoUsuario:string
}
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  addUserForm: FormGroup;
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  pass: FormControl;
  rut: FormControl;
  street: FormControl;
  number: FormControl;
  apartment: FormControl;
  block: FormControl;
  comuna: FormControl;
  city: FormControl;
  level: FormControl;
  group: FormControl;
  tipoUsuario:FormControl;

  url: string = 'url.com';
  title: string = 'Crear Usuario'

  constructor(
    private _db:DBService,
    private auth: AuthService,
    
    ) {
    this.addUserForm = new FormGroup({
      name: this.name = new FormControl('', [Validators.required]),
      lastName: this.lastName = new FormControl('', [Validators.required]),
      email: this.email = new FormControl('', [Validators.required]),
      pass: this.pass = new FormControl('', [Validators.required]),
      rut: this.rut = new FormControl('', [Validators.required]),
      street: this.street = new FormControl('', [Validators.required]),
      number: this.number = new FormControl('', [Validators.required]),
      apartment: this.apartment = new FormControl('', [Validators.required]),
      block: this.block = new FormControl('', [Validators.required]),
      comuna: this.comuna = new FormControl('', [Validators.required]),
      city: this.city = new FormControl('', [Validators.required]),
      level: this.level = new FormControl('', [Validators.required]),
      group: this.group = new FormControl('', [Validators.required]),
      tipoUsuario: this.tipoUsuario = new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
  }

  send(){
    const data: NewUser = {
      name: this.name.value,
      lastName: this.lastName.value,
      email: this.email.value,
      rut: this.rut.value,
      street: this.street.value,
      number: this.number.value,
      apartment: this.apartment.value,
      block: this.block.value,
      comuna: this.comuna.value,
      city: this.city.value,
      level: this.level.value,
      group: this.group.value,
      tipoUsuario: this.tipoUsuario.value
    }
    this._db.create("estudiante", data.rut, data);
    this.auth.signup( data.email, this.pass.value )
    this.addUserForm.reset();
  }
}
