import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgressioneComponent } from './edit-progressione.component';

describe('EditProgressioneComponent', () => {
  let component: EditProgressioneComponent;
  let fixture: ComponentFixture<EditProgressioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProgressioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProgressioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
