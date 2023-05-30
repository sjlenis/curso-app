import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import {DetailCursoComponent} from "./detail-curso/detail-curso.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateCursoComponent} from "../cursos/create-curso/create-curso.component";



@NgModule({
  declarations: [
    ListCursosComponent,
    DetailCursoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
  ,
  exports:[

  ]
})
export class SemestreModule { }
