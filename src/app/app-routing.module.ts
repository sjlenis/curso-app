import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCursosComponent} from "./semestre/list-cursos/list-cursos.component";
import {CreateCursoComponent} from "./cursos/create-curso/create-curso.component";

const routes: Routes = [
  {
    path: 'cursos',
    component: ListCursosComponent
  },
  {
    path: 'cursos/crear',
    component: CreateCursoComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
