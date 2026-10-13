import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Stack } from './stack';

describe('Stack', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stack],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Stack);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
