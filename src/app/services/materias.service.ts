import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  API_URI = 'http://localhost:25844/materias'
  materiaSeleccionada: number;

  constructor(private http: HttpClient) { }

  getMaterias(id: number){
    return this.http.get(this.API_URI + '/' + id);
  }

  getMateria(id: number){
    return this.http.get(this.API_URI + '/selecciona/' + id);
  }

  getGrupos(){
    return this.http.get(this.API_URI + '/grupos/getGrupos');
  }

  getDias(){
    return this.http.get(this.API_URI + '/agregaMateria/dias');
  }

  getHoras(){
    return this.http.get(this.API_URI + '/agregaMateria/horas');
  }

  getAutoIncrement(){
    return this.http.get(this.API_URI + '/agregaMateria/increment');
  }

  saveMateria(materia: any){
    return this.http.post(this.API_URI + '/agregaMateria', materia);
  }

  deleteMateria(materia: number){
    return this.http.get(this.API_URI + '/eliminaMateria/' + materia);
  }
  
  saveHorario(horario: any){
    return this.http.post(this.API_URI + '/agregaMateria/horario', horario);
  }
}
