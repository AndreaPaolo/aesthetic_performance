import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEsercizioComponent } from './create-esercizio.component';

describe('CreateEsercizioComponent', () => {
  let component: CreateEsercizioComponent;
  let fixture: ComponentFixture<CreateEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEsercizioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
