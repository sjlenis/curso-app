import {Component, Input} from '@angular/core';
import {Curso} from "../model/curso";

@Component({
  selector: 'app-detail-curso',
  templateUrl: './detail-curso.component.html',
  styleUrls: ['./detail-curso.component.css']
})
export class DetailCursoComponent {
  @Input() public curso!: Curso;


}
