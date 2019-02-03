import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  API_URI = 'http://localhost:25844/alumnos'
  alumnoSeleccionado: string;
  alumnoGrupoSeleccionado: number;

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get(this.API_URI);
  }

  getAlumno(id: string){
    return this.http.get(this.API_URI + '/' + id);
  }

  saveAlumno(alumno: any){
    return this.http.post(this.API_URI + '/create', alumno);
  }

  updateAlumno(alumno: any, id: string){
    return this.http.post(this.API_URI + '/update/' + id, alumno);
  }

  deleteAlumno(id: string){
    return this.http.get(this.API_URI + '/delete/' + id);
  }

  seleccionMateria(id: string){
    return this.http.get(this.API_URI + '/seleccionMaterias/' + id);
  }

  saveSelectMaterias(mate: any){
    return this.http.post(this.API_URI + '/saveMaterias', mate);
  }
  deleteSelectMaterias(mate: any){
    return this.http.post(this.API_URI + '/deleteMaterias', mate);
  }

  saveCalificaciones(calificaciones: any){
    return this.http.post(this.API_URI + '/saveCalificaciones', calificaciones);
  }
  getReporte(id: string){
    return this.http.get(this.API_URI + '/reporte/' + id);
  }
}
