import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloUnoComponent } from './articulo-uno.component';

describe('ArticuloUnoComponent', () => {
  let component: ArticuloUnoComponent;
  let fixture: ComponentFixture<ArticuloUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
