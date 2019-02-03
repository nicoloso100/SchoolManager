import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../../services/alumnos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

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

  volver(){
    this.router.navigate(['/alumnos']);
  }
}
