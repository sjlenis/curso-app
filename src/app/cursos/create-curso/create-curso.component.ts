import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent {
  cursoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cursoForm = formBuilder.group({nombre:["",[Validators.required, Validators.minLength(3)]]
    });
  }

  createPais(value: any) {
    return false;
  }
}
