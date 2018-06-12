import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultConvertComponent } from './result-convert.component';

describe('ResultConvertComponent', () => {
  let component: ResultConvertComponent;
  let fixture: ComponentFixture<ResultConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
