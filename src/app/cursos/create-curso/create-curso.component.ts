import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../model/curso";
import {CursoService} from "../service/curso.service";

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})

export class CreateCursoComponent implements OnInit {

  public cursoForm!: FormGroup; // FormGroup es un conjunto de FormControl que se pueden agrupar en un formulario

  // FormBuilder es una clase que nos permite crear formularios de manera más sencilla
  constructor(private formBuilder: FormBuilder, private cursoService: CursoService) {  // Inyectamos el servicio CursoService
  }

  ngOnInit(): void {
    this.cursoForm = this.formBuilder.group({ // Creamos el formulario con los campos que queremos que tenga
      nombre:["",[Validators.required, Validators.minLength(3)]] // El campo nombre es obligatorio y debe tener al menos 3 caracteres
    });
  }

  createCurso(curso: Curso) { // Creamos un curso con el formulario que hemos creado y lo guardamos en la base de datos
    // El metodo save del servicio CursoService devuelve un Observable que nos permite suscribirnos a el y obtener la respuesta del servidor o un error
    this.cursoService.save(curso).subscribe(
      response => { // Si la respuesta es correcta mostramos un mensaje de exito
        console.log(response);
        alert(`Curso ${curso.nombre} creado con exito`);
      } , error => { // Si la respuesta es incorrecta mostramos un mensaje de error
        console.log(error);
        alert(`Error al crear el curso ${curso.nombre}`);
      }
    );
  }

  // Este metodo se ejecuta cuando se pulsa el boton de cancelar y resetea el formulario
  cancelCreation(){
    this.cursoForm.reset();
  }

}
