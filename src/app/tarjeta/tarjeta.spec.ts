import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Tarjeta } from './tarjeta';

describe('Tarjeta', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjeta],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Tarjeta);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
