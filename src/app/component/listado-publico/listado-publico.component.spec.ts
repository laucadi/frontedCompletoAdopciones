import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPublicoComponent } from './listado-publico.component';

describe('ListadoPublicoComponent', () => {
  let component: ListadoPublicoComponent;
  let fixture: ComponentFixture<ListadoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
