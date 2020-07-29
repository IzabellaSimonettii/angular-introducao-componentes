import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourses } from '../interfaces/ICourses';
import { FormGroup } from '@angular/forms';
import { Course } from '../model/course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Output() cursoAdicionado = new EventEmitter();

  public formCouses: FormGroup;
  public courses: ICourses;
  course: Course = new Course();

  public courseType = ['Bacharelado', 'Pos-Graduacao', 'Tecnologo', 'Mestrado', 'Doutorado', 'Outros'];
  public coursePeriod = ['Manha', 'Tarde', 'Noite', 'Integral'];

  constructor(
  ) { }

  ngOnInit() {
  }

  createForm(courseForm) {
    this.courses.name = courseForm.value.name;
    this.courses.period = courseForm.value.period;
    this.courses.startYear = courseForm.value.startYear;
    this.courses.cicles = courseForm.value.cicles;
    this.courses.type = courseForm.value.type;
  }
}
