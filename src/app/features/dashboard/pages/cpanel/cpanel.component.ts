import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit {

  uid: string = 'lXl9pOgOgSQxLvQNjvfdy2Xy0O22';
  admin: boolean;

  constructor(
    private readonly authService: AuthService,
  ) { 
    this.verification()
  }

  ngOnInit(): void {
  }

  verification () {
    const user = this.authService.whoIs();
    if ( user && user.uid === this.uid ) {
      this.admin = true;
    }
    else {
      this.admin = false
    }
  }
}
