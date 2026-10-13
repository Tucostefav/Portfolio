import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Proyectos } from './proyectos';

describe('Proyectos', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyectos],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Proyectos);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
