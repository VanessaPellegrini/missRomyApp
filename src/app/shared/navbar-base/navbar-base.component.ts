import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-base',
  templateUrl: './navbar-base.component.html',
  styleUrls: ['./navbar-base.component.css']
})
export class NavbarBaseComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() nameValidator: boolean = false

  active: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  activeMenu(bool: boolean) {
    return this.active = bool

  }

  logout() {
    console.log("logout")
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
}
