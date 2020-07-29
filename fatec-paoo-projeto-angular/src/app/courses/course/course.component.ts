import { Component, OnInit, Input } from '@angular/core';
import { ICourses } from 'src/app/interfaces/ICourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: ICourses;
  constructor() { }

  ngOnInit() {
  }

}
