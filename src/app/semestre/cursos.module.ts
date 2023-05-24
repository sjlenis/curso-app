import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import {DetailCursoComponent} from "../detail-curso/detail-curso.component";



@NgModule({
  declarations: [
    ListCursosComponent,
    DetailCursoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutosModule { }
