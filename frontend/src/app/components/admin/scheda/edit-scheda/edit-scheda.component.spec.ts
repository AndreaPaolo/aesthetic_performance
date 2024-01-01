import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchedaComponent } from './edit-scheda.component';

describe('EditSchedaComponent', () => {
  let component: EditSchedaComponent;
  let fixture: ComponentFixture<EditSchedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSchedaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSchedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
