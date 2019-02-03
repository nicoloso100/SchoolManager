import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlumnosService } from "../../../services/alumnos.service";
import { MateriasService } from "../../../services/materias.service";

@Component({
  selector: 'app-inserta-alumno',
  templateUrl: './inserta-alumno.component.html',
  styleUrls: ['./inserta-alumno.component.css']
})
export class InsertaAlumnoComponent implements OnInit {


grupos: any = [];
fechaNacimiento: Date;

alumnoCompleto: any = {
  alum_codigo: '',
  alum_nombres: '',
  alum_apellidos: '',
  alum_telefono: '',
  alum_direccion: '',
  alum_nacimiento: '',
  alum_email: '',
  alum_grupo: 1,
};

  constructor(
    private alumnosService: AlumnosService,
    private materiasService: MateriasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.materiasService.getGrupos().subscribe(
      res => {
        this.grupos = res[0];
      },
      err => console.log(err)
    );
  }

  
  selectChangeHandler (event: any) {
    this.alumnoCompleto.alum_grupo = +event.target.value;
  }

  saveAlumno(){
    this.alumnoCompleto.alum_nacimiento = this.fechaNacimiento.toLocaleDateString();
    this.alumnosService.saveAlumno(this.alumnoCompleto).subscribe(
      res =>{
        if(res['text'] == "ok"){
          this.router.navigate(['/alumnos']);
        }
        else{
          alert('Error al insertar el alumno, ¿ya existe?');
        }
      },
      err =>{
        alert('No se ha podido comunicar con la API');
      }
    );
  }
}
