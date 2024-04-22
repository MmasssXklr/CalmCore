import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [GridComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'booksapp'`, () => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('booksapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GridComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('booksapp app is running!');
  });
});
