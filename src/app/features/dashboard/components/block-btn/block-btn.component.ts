import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-block-btn',
  templateUrl: './block-btn.component.html',
  styleUrls: ['./block-btn.component.css']
})
export class BlockBtnComponent implements OnInit {
  @Input() text: string
  @Input() url: string
  @Input() btnText: string
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  follow() {
    this.router.navigate([this.url], { relativeTo: this.route });
  }

}
