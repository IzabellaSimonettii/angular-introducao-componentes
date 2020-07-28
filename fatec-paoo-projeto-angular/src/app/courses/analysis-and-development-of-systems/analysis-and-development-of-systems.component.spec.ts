import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAndDevelopmentOfSystemsComponent } from './analysis-and-development-of-systems.component';

describe('AnalysisAndDevelopmentOfSystemsComponent', () => {
  let component: AnalysisAndDevelopmentOfSystemsComponent;
  let fixture: ComponentFixture<AnalysisAndDevelopmentOfSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisAndDevelopmentOfSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisAndDevelopmentOfSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
