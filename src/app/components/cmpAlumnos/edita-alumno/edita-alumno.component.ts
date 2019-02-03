import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlumnosService } from '../../../services/alumnos.service';
import { MateriasService } from "../../../services/materias.service";

@Component({
  selector: 'app-edita-alumno',
  templateUrl: './edita-alumno.component.html',
  styleUrls: ['./edita-alumno.component.css']
})
export class EditaAlumnoComponent implements OnInit {

  grupos: any = [];
  idAlumno: string;
  grup_indicativo: string;
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
    
    this.idAlumno = this.alumnosService.alumnoSeleccionado;
    if(this.idAlumno != null){
      this.alumnosService.getAlumno(this.idAlumno).subscribe(
        res => {
          this.alumnoCompleto.alum_codigo = res[0]['alum_codigo'];
          this.alumnoCompleto.alum_nombres = res[0]['alum_nombres'];
          this.alumnoCompleto.alum_apellidos = res[0]['alum_apellidos'];
          this.alumnoCompleto.alum_telefono = res[0]['alum_telefono'];
          this.alumnoCompleto.alum_direccion = res[0]['alum_direccion'];
          this.alumnoCompleto.alum_nacimiento = res[0]['alum_nacimiento'];
          this.alumnoCompleto.alum_email = res[0]['alum_email'];
          this.alumnoCompleto.alum_grupo = res[0]['alum_grupo'];
          this.grup_indicativo = res[0]['grup_indicativo'];
          this.fechaNacimiento = new Date(this.alumnoCompleto.alum_nacimiento);
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/alumnos']);
    }
  }

  selectChangeHandler (event: any) {
    this.alumnoCompleto.alum_grupo = +event.target.value;
  }

  saveAlumno(){
    this.alumnoCompleto.alum_nacimiento = this.fechaNacimiento.toLocaleDateString();
    this.alumnoCompleto.alum_telefono = String(this.alumnoCompleto.alum_telefono);
    this.alumnosService.updateAlumno(this.alumnoCompleto, this.idAlumno).subscribe(
      res =>{
        if(res['text'] == "ok"){
          this.router.navigate(['/alumnos']);
        }
        else{
          alert('Error al actualizar el alumno');
        }
      },
      err =>{
        alert('No se ha podido comunicar con la API');
      }
    );
  }

}
