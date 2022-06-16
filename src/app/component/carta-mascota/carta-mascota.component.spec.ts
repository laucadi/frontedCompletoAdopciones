import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaMascotaComponent } from './carta-mascota.component';

describe('CartaMascotaComponent', () => {
  let component: CartaMascotaComponent;
  let fixture: ComponentFixture<CartaMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
