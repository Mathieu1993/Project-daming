import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePresComponent } from './page-pres.component';

describe('PagePresComponent', () => {
  let component: PagePresComponent;
  let fixture: ComponentFixture<PagePresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
