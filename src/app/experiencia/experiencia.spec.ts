import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Experiencia } from './experiencia';

describe('Experiencia', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiencia],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Experiencia);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
