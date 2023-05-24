import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Curso} from "../model/curso";

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl: string = "https://raw.githubusercontent.com/FabianAndres2023/Cursos/master/curso.json";

  constructor(private httpClient: HttpClient) { }

//observable es parte de la interfaz reactiva de javascript (rxjs)
  getCursos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.baseUrl);
  }


}
