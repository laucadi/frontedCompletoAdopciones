import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearComponent } from './form-crear.component';

describe('FormCrearComponent', () => {
  let component: FormCrearComponent;
  let fixture: ComponentFixture<FormCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
