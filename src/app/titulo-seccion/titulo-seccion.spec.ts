import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TituloSeccion } from './titulo-seccion';

describe('TituloSeccion', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloSeccion],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TituloSeccion);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
