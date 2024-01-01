import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchedaComponent } from './view-scheda.component';

describe('ViewSchedaComponent', () => {
  let component: ViewSchedaComponent;
  let fixture: ComponentFixture<ViewSchedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSchedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSchedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
