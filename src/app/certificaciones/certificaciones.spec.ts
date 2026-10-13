import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Certificaciones } from './certificaciones';

describe('Certificaciones', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificaciones],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Certificaciones);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
