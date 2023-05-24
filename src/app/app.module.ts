import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterOutlet} from "@angular/router";
import {AutosModule} from "./semestre/cursos.module";
import {CursosService} from "./semestre/service/curso.service";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {CursosModule} from "./cursos/cursos.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
    imports: [
        BrowserModule,
        AutosModule,
        CommonModule,
        CursosModule,
        HttpClientModule,
        AppRoutingModule

    ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
