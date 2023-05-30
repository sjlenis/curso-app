import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Curso} from "../model/curso";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  //Se define la url del servicio REST
  private urlEndPoint: string = 'http://localhost:8081/curso-service/cursos';

  //Metodo para crear un curso con HttpClient por el metodo POST
  save(curso: any): Observable<Curso> { //Se retorna un objeto observable que espera a que este disponible el objeto Curso
    return this.httpClient.post<Curso>(this.urlEndPoint, curso).pipe( //Se realiza la peticion POST al servicio REST
      catchError(() => throwError(() => new Error('Error al crear el curso'))) //Se captura el error en caso de que exista
    );
  }

  //Se inyecta el servicio HttpClient en el constructor
  constructor(private httpClient: HttpClient) { }
}

