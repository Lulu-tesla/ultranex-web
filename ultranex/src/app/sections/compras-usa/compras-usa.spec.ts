import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprasUsa } from './compras-usa';

describe('ComprasUsa', () => {
  let component: ComprasUsa;
  let fixture: ComponentFixture<ComprasUsa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasUsa]
    }).compileComponents();

    fixture = TestBed.createComponent(ComprasUsa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
