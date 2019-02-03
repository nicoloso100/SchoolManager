import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../../services/alumnos.service';

@Component({
  selector: 'app-elimina-alumno',
  templateUrl: './elimina-alumno.component.html',
  styleUrls: ['./elimina-alumno.component.css']
})
export class EliminaAlumnoComponent implements OnInit {

  alumnoCompleto: any = {
    alum_codigo: '',
    alum_nombres: '',
    alum_apellidos: '',
    alum_telefono: '',
    alum_direccion: '',
    alum_nacimiento: '',
    alum_email: '',
    alum_grupo: 0,
    grup_indicativo: ''
  };

  idAlumno: string;

  constructor(
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idAlumno = this.alumnosService.alumnoSeleccionado;
    if(this.idAlumno != null){
      this.alumnosService.getAlumno(this.idAlumno).subscribe(
        res => {
          this.alumnoCompleto = res[0];
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/alumnos']);
    }
  }

  Cancelar(){
    this.router.navigate(['/alumnos']);
  }

  eliminarAlumno(){
    this.alumnosService.deleteAlumno(this.idAlumno).subscribe(
      res => {
        if(res['text'] == "ok"){
          this.router.navigate(['/alumnos']);
        }
        else{
          alert('Error al eliminar el alumno');
        }
      },
      err => alert('No se ha podido comunicar con la API')
    );
  }

}
