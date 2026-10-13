import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Testimonios } from './testimonios';

describe('Testimonios', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonios],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Testimonios);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
