import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEsercizioComponent } from './view-esercizio.component';

describe('ViewEsercizioComponent', () => {
  let component: ViewEsercizioComponent;
  let fixture: ComponentFixture<ViewEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEsercizioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
