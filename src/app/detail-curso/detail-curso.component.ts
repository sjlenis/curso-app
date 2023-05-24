import {Component, Input} from '@angular/core';
import {Curso} from "../semestre/model/curso";

@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-curso.component.html',
  styleUrls: ['./detail-curso.component.css']
})
export class DetailCursoComponent {
  @Input() public curso!: Curso;


}
