import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    ) {}
    
  menu: any[] = [
    { option: 'dashboard', link: '/dashboard' },
    { option: 'crear clase', link: 'crear-clase' },
    { option: 'crea usuario', link: 'crear-usuario' },
  ];

  title: string = 'Bienvenido usuario';

  ngOnInit(): void {}
}
