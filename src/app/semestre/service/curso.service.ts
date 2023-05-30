import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../model/curso";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl: string = "https://raw.githubusercontent.com/FabianAndres2023/Curso/master/cursos.json.txt";

  constructor(private httpClient: HttpClient) { }

  //Observable es parte de la interfaz reactiva de javascript (rxjs)
  getCursos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.baseUrl);
  }
}
