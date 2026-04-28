import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoHome } from './contacto-home';

describe('ContactoHome', () => {
  let component: ContactoHome;
  let fixture: ComponentFixture<ContactoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoHome]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
