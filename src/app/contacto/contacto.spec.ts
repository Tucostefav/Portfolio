import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Contacto } from './contacto';

describe('Contacto', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacto],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Contacto);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
