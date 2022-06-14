import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDosComponent } from './articulo-dos.component';

describe('ArticuloDosComponent', () => {
  let component: ArticuloDosComponent;
  let fixture: ComponentFixture<ArticuloDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
