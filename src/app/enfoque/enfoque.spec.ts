import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Enfoque } from './enfoque';

describe('Enfoque', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enfoque],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Enfoque);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
