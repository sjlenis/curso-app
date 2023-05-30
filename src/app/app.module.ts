import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SemestreModule} from "./semestre/cursos.module";
import {CursosService} from "./semestre/service/curso.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {CursosModule} from "./cursos/cursos.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
    imports: [
        BrowserModule,
        SemestreModule,
        CommonModule,
        CursosModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule

    ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
