import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgressioneComponent } from './create-progressione.component';

describe('CreateProgressioneComponent', () => {
  let component: CreateProgressioneComponent;
  let fixture: ComponentFixture<CreateProgressioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProgressioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProgressioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
