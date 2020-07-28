import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import {
  AnalysisAndDevelopmentOfSystemsComponent
} from './courses/analysis-and-development-of-systems/analysis-and-development-of-systems.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CoursesComponent,
    AnalysisAndDevelopmentOfSystemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
