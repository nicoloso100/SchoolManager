import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './components/cmpAlumnos/alumnos/alumnos.component';
import { HomeComponent } from './components/cmpHome/home.component';
import { InsertaAlumnoComponent } from './components/cmpAlumnos/inserta-alumno/inserta-alumno.component';
import { AsignaMateriasAlumnoComponent } from './components/cmpAlumnos/asigna-materias-alumno/asigna-materias-alumno.component';
import { MateriasComponent } from './components/cmpMaterias/materias/materias.component';
import { RegistroMateriasComponent } from './components/cmpMaterias/registro-materias/registro-materias.component';
import { ProfesoresComponent } from './components/cmpProfesores/profesores/profesores.component';
import { AsignaMateriasProfesorComponent } from './components/cmpProfesores/asigna-materias-profesor/asigna-materias-profesor.component';
import { InsertaProfesorComponent } from './components/cmpProfesores/inserta-profesor/inserta-profesor.component';
import { ReportesComponent } from './components/cmpReportes/reportes.component';
import { CalificacionesComponent } from './components/cmpAlumnos/calificaciones/calificaciones.component';
import { EliminaAlumnoComponent } from "./components/cmpAlumnos/elimina-alumno/elimina-alumno.component";
import { EditaAlumnoComponent } from './components/cmpAlumnos/edita-alumno/edita-alumno.component'
import { DetallesComponent } from "./components/cmpAlumnos/detalles/detalles.component";
import { EliminaMateriaComponent } from "./components/cmpMaterias/elimina-materia/elimina-materia.component";
import { EliminaProfesorComponent } from "./components/cmpProfesores/elimina-profesor/elimina-profesor.component";
import { EditaProfesorComponent } from "./components/cmpProfesores/edita-profesor/edita-profesor.component";
import { DetallesProfesorComponent } from "./components/cmpProfesores/detalles-profesor/detalles-profesor.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  },
  {
    path: 'alumnos/insertaAlumno',
    component: InsertaAlumnoComponent
  },
  {
    path: 'alumnos/asignaMateriasAlumno',
    component: AsignaMateriasAlumnoComponent
  },
  {
    path: 'alumnos/editaAlumno',
    component: EditaAlumnoComponent
  },
  {
    path: 'alumnos/detalles',
    component: DetallesComponent
  },
  {
    path: 'materias',
    component: MateriasComponent
  },
  {
    path: 'materias/registroMaterias',
    component: RegistroMateriasComponent
  },
  {
    path: 'materias/eliminaMateria',
    component: EliminaMateriaComponent
  },
  {
    path: 'profesores',
    component: ProfesoresComponent
  },
  {
    path: 'profesores/insertaProfesor',
    component: InsertaProfesorComponent
  },
  {
    path: 'profesores/asignaMateriasProfesor',
    component: AsignaMateriasProfesorComponent
  },
  {
    path: 'profesores/eliminaProfesor',
    component: EliminaProfesorComponent
  },
  {
    path: 'profesores/editaProfesor',
    component: EditaProfesorComponent
  },
  {
    path: 'profesores/detallesProfesor',
    component: DetallesProfesorComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'alumnos/calificaciones',
    component: CalificacionesComponent
  },
  {
    path: 'alumnos/eliminarAlumno',
    component: EliminaAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
