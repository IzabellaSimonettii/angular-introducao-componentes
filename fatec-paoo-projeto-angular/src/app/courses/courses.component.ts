import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourses } from '../interfaces/ICourses';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  public coursePeriod = ['Manha', 'Tarde', 'Noite'];

  constructor(
  ) { }

  ngOnInit() {
  }

  sendData() {
    console.log(this.formCouses.value);
  }

  createForm(courseForm) {
    this.courses.name = courseForm.value.name;
    this.courses.period = courseForm.value.period;
    this.courses.year = courseForm.value.year;
    this.courses.type = courseForm.value.type;

    console.log('courseForm', courseForm);

    console.log(`
    Nome: ${this.courses.name},
    Periodo: ${this.courses.period},
    Ano: ${this.courses.year},
    Tipo: ${this.courses.type}`);
  }
}
