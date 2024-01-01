import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEsercizioComponent } from './edit-esercizio.component';

describe('EditEsercizioComponent', () => {
  let component: EditEsercizioComponent;
  let fixture: ComponentFixture<EditEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEsercizioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
