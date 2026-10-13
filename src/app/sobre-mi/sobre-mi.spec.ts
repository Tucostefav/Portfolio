import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SobreMi } from './sobre-mi';

describe('SobreMi', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMi],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SobreMi);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
