import {Component, OnInit} from '@angular/core';
import {Curso} from "../model/curso";
import {CursosService} from "../service/curso.service";
//import swal from "sweetalert2";
@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit{
  public cursos: Array<Curso> = [];
  public cursoSelected!: Curso;
  public selected: boolean = false;
  constructor(private cursosService: CursosService) {
  }

  public getCursos(){
    this.cursosService.getCursos().subscribe(
      (cursos: Array<Curso>) => {
        this.cursos=cursos;
      }
    );
  }

  ngOnInit(): void {
    this.getCursos();
  }

  onSelected(curso: Curso) {
    this.selected=true;
    this.cursoSelected = curso;
    //swal.fire('Any fool can use a computer')
  }
}
