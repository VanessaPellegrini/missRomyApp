import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpanelAdminComponent } from './cpanel-admin.component';

describe('CpanelAdminComponent', () => {
  let component: CpanelAdminComponent;
  let fixture: ComponentFixture<CpanelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpanelAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpanelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
