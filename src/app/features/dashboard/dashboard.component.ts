import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { DBService } from '../../core/services/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  
  menu: any[] = [];
  class: any[] = [];
  students: any[] = [];
  userOn: string;
  title: string;

  constructor(   
      private db: DBService,
      private readonly auth: AuthService,
    ) { 
      this.verification();
      this.db.get('clase').subscribe( data => {
        this.class = data;
      });
    }

  ngOnInit(): void {}

  setTitle() {
    return this.title = `Bienvenido ${ this.userOn }`
  }

  verification () {
    if ( this.auth.verification() ) {
      this.userOn = 'Admin';
      this.setTitle();
      this.menu = [
        { option: 'dashboard', link: '/dashboard' },
        { option: 'crear clase', link: 'crear-clase' },
        { option: 'crea usuario', link: 'crear-usuario' },
      ];
    }
    else {
      this.db.get('estudiante').subscribe( data => {
        this.students = data;
        const user = this.auth.whoIs()
        if (user) {
          const [ student ] = this.students.filter( element => element.email.toLowerCase() === user.email);
          this.userOn = student.name;
          this.setTitle();
        }
      });
      this.menu = [
        { option: 'dashboard', link: '/dashboard' },
        { option: 'seleccionar clase', link: 'seleccionar-clase' },
      ];
    }
  }
}
