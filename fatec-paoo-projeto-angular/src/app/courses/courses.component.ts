import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourses } from '../interfaces/ICourses';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Output() cursoAdicionado = new EventEmitter();

  public formCouses: FormGroup;
  public courses: ICourses;

  private showInvalidFields = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  adicionarCurso(info: ICourses) {
    const course = {
      name: this.courses.name,
      period: this.courses.period,
      year: this.courses.year,
      type: this.courses.type
    };

    this.courses = course;
    this.cursoAdicionado.emit(course);

    console.log('Array', info);
  }

  submit() {

    if (this.formCouses.valid) {

      const values = this.formCouses.value;
      this.adicionarCurso(values);

    } else {
      this.showInvalidFields = true;
    }
  }
}
