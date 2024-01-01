import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminesercizioComponent } from './adminesercizio.component';

describe('AdminesercizioComponent', () => {
  let component: AdminesercizioComponent;
  let fixture: ComponentFixture<AdminesercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminesercizioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminesercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
