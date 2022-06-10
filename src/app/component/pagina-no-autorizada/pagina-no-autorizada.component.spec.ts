import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoAutorizadaComponent } from './pagina-no-autorizada.component';

describe('PaginaNoAutorizadaComponent', () => {
  let component: PaginaNoAutorizadaComponent;
  let fixture: ComponentFixture<PaginaNoAutorizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNoAutorizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNoAutorizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
