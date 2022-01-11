import { Component, OnInit } from '@angular/core';
import { DBService } from '../../../../core/services/db.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-class-selector-card',
  templateUrl: './class-selector-card.component.html',
  styleUrls: ['./class-selector-card.component.css']
})
export class ClassSelectorCardComponent implements OnInit {
  
  ramo: string = 'Matematicas';
  class: any[] = [];
  students: any[] = [];
  userOn: any;
  classesEnrolled: any [] = []

  constructor(
    private db: DBService,
    private readonly auth: AuthService,
    private snackbar: MatSnackBar,
  ) {
    this.db.get('clase').subscribe( data => {
      this.class = data;
    }); 
    this.db.get('estudiante').subscribe( data => {
      this.students = data;
    });
  }

  ngOnInit(): void {
  }

  enrolled( asignature:string ) {
    const [ enroll ] = this.class.filter( e => e.asignature === asignature);
    this.classesEnrolled.push(enroll);
    const user = this.auth.whoIs()
    if (user) {
      const [ student ] = this.students.filter( element => element.email.toLowerCase() === user.email);
      this.db.updatePartial('estudiante', student.rut, this.classesEnrolled)
    }
    this.snackbar.open('Clase Inscrita', '', { duration: 2500})
  }

}
