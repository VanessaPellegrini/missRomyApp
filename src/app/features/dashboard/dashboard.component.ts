import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthService, 
    private router: Router,
    ) {}
    
  menu: any[] = [
    { option: 'dashboard', link: '/dashboard' },
    { option: 'crear clase', link: 'crear-clase' },
    { option: 'crea usuario', link: 'crear-usuario' },
    { option: 'cerrar sesion', link: this.logout }
  ];

  title: string = 'Bienvenido usuario';

  ngOnInit(): void {}

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
}
