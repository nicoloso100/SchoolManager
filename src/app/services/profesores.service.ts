import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  API_URI = 'http://localhost:25844/profesores'

  profesorSeleccionado: string;

  constructor(private http: HttpClient) { }

  getProfesores(){
    return this.http.get(this.API_URI);
  }
  getProfesor(id: string){
    return this.http.get(this.API_URI + '/' + id);
  }
  getProfesorCompleto(id: string){
    return this.http.get(this.API_URI + '/profesorCompleto/' + id);
  }
  updateProfesor(alumno: any, id: string){
    return this.http.post(this.API_URI + '/updateProfesor/' + id, alumno);
  }
  saveProfesor(profesor: any){
    return this.http.post(this.API_URI + '/saveProfesor', profesor);
  }
  deleteProfesor(profesor: string){
    return this.http.get(this.API_URI + '/deleteProfesor/' + profesor);
  }
  getMateriasProfesor(id: string){
    return this.http.get(this.API_URI + '/materiasProfesor/' + id);
  }
  deleteSelectMaterias(mate: any){
    return this.http.post(this.API_URI + '/deleteMaterias', mate);
  }
  saveSelectMaterias(mate: any){
    return this.http.post(this.API_URI + '/saveMaterias', mate);
  }
}
