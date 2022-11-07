import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { HeaderComponent } from './listado-tareas/header/header.component';
import { FooterComponent } from './listado-tareas/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoTareasComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
