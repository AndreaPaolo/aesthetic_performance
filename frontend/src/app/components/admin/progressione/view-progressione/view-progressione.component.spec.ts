import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgressioneComponent } from './view-progressione.component';

describe('ViewProgressioneComponent', () => {
  let component: ViewProgressioneComponent;
  let fixture: ComponentFixture<ViewProgressioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProgressioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewProgressioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
