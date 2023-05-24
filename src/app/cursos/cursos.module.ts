import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateCursoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
