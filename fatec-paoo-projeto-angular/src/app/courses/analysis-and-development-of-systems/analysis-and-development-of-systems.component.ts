import { Component, OnInit, Input } from '@angular/core';
import { ICourses } from 'src/app/interfaces/ICourses';

@Component({
  selector: 'app-analysis-and-development-of-systems',
  templateUrl: './analysis-and-development-of-systems.component.html',
  styleUrls: ['./analysis-and-development-of-systems.component.scss']
})
export class AnalysisAndDevelopmentOfSystemsComponent implements OnInit {

  @Input() course: ICourses;
  constructor() { }

  ngOnInit() {
  }

}
