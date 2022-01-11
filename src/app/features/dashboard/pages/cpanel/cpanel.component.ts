import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit {

  admin: boolean;

  @Output() menu = new EventEmitter();

  constructor(
    private readonly authService: AuthService,
  ) { 
    this.verification()
  }

  ngOnInit(): void {
  }

  verification () {
    if ( this.authService.verification() ) {
      this.admin = true;
    }
    else {
      this.admin = false;
    }
  }
}
