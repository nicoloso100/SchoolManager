import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/cmpHome/home.component';
import { AlumnosComponent } from './components/cmpAlumnos/alumnos/alumnos.component';
import { InsertaAlumnoComponent } from './components/cmpAlumnos/inserta-alumno/inserta-alumno.component';

import { AlumnosService } from './services/alumnos.service';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { MateriasComponent } from './components/cmpMaterias/materias/materias.component';
import { RegistroMateriasComponent } from './components/cmpMaterias/registro-materias/registro-materias.component';
import { ProfesoresComponent } from './components/cmpProfesores/profesores/profesores.component';
import { InsertaProfesorComponent } from './components/cmpProfesores/inserta-profesor/inserta-profesor.component';
import { AsignaMateriasAlumnoComponent } from './components/cmpAlumnos/asigna-materias-alumno/asigna-materias-alumno.component';
import { AsignaMateriasProfesorComponent } from './components/cmpProfesores/asigna-materias-profesor/asigna-materias-profesor.component';
import { ReportesComponent } from './components/cmpReportes/reportes.component';
import { CalificacionesComponent } from './components/cmpAlumnos/calificaciones/calificaciones.component';
import { EliminaAlumnoComponent } from './components/cmpAlumnos/elimina-alumno/elimina-alumno.component';
import { EditaAlumnoComponent } from './components/cmpAlumnos/edita-alumno/edita-alumno.component';
import { DetallesComponent } from './components/cmpAlumnos/detalles/detalles.component';
import { EliminaMateriaComponent } from './components/cmpMaterias/elimina-materia/elimina-materia.component';
import { EliminaProfesorComponent } from './components/cmpProfesores/elimina-profesor/elimina-profesor.component';
import { EditaProfesorComponent } from './components/cmpProfesores/edita-profesor/edita-profesor.component';
import { DetallesProfesorComponent } from './components/cmpProfesores/detalles-profesor/detalles-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumnosComponent,
    InsertaAlumnoComponent,
    MateriasComponent,
    RegistroMateriasComponent,
    ProfesoresComponent,
    InsertaProfesorComponent,
    AsignaMateriasAlumnoComponent,
    AsignaMateriasProfesorComponent,
    ReportesComponent,
    CalificacionesComponent,
    EliminaAlumnoComponent,
    EditaAlumnoComponent,
    DetallesComponent,
    EliminaMateriaComponent,
    EliminaProfesorComponent,
    EditaProfesorComponent,
    DetallesProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [
    AlumnosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
