import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  
  menu: any[] = [];

  title: string = 'Bienvenido usuario';

  constructor(    
      private readonly authService: AuthService,
    ) { 
      this.verification()
    }

  ngOnInit(): void {}

  verification () {
    if ( this.authService.verification() ) {
      this.menu = [
        { option: 'dashboard', link: '/dashboard' },
        { option: 'crear clase', link: 'crear-clase' },
        { option: 'crea usuario', link: 'crear-usuario' },
      ];
    }
    else {
      this.menu = [
        { option: 'dashboard', link: '/dashboard' },
        { option: 'seleccionar clase', link: 'seleccionar-clase' },
      ];
    }
  }
}
