import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../model/curso";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl: string = "http://localhost:8081/curso-service/cursos";

  constructor(private httpClient: HttpClient) { }

  //Observable es parte de la interfaz reactiva de javascript (rxjs)
  getCursos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.baseUrl);
  }
}
