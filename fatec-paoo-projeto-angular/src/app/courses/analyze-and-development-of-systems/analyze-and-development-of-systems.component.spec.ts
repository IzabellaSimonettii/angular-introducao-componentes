import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeAndDevelopmentOfSystemsComponent } from './analyze-and-development-of-systems.component';

describe('AnalyzeAndDevelopmentOfSystemsComponent', () => {
  let component: AnalyzeAndDevelopmentOfSystemsComponent;
  let fixture: ComponentFixture<AnalyzeAndDevelopmentOfSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeAndDevelopmentOfSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeAndDevelopmentOfSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
