import { NgxMaskModule } from 'ngx-mask';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './service/ClienteService';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';

const routes: Routes = [
  { path: 'consulta', component: ConsultaComponent },
  { path: 'formulario', component: FormularioComponent }
  // ... outras rotas
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ConsultaComponent,
  ],

  imports: [
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
