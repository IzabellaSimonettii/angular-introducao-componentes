import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourses } from '../interfaces/ICourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Output() cursoAdicionado = new EventEmitter();

  public courses: ICourses;

  constructor() { }

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

  // public getCouses(info: ICourses[]) {
  //   return of(this.mockGetCouses());

  // }

  // private mockGetCouses() {

  //   const cousesMock = `{
  //     "couses": [
  //       {
  //         "id": ["1238468"],
  //         "name": "Analise e desenvolvimento de sistemas",
  //         "period": "Manha",
  //         "year": 2015
  //         "type": "Tecnologo"
  //       },
  //       {
  //         "id": ["0874535"],
  //         "name": "Gestao Comercial",
  //         "period": "Tarde",
  //         "year": 2016
  //         "type": "Tecnologo"
  //       },
  //       {
  //         "id": ["4823442"],
  //         "name": "Eventos",
  //         "period": "Noite",
  //         "year": 2018
  //         "type": "Tecnologo"
  //       }
  //     ]
  //   }`;
  //   return JSON.parse(cousesMock);
  // }
}
