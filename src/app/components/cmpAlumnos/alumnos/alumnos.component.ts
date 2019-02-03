import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../../services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: any = [];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnosService.getAlumnos().subscribe(
      res => {
        this.alumnos = res[0];
      },
      err => alert('Error al traer los datos')
    );
  }

  RowSelected(u:any){
    this.alumnosService.alumnoSeleccionado = u.alum_codigo;
    this.alumnosService.alumnoGrupoSeleccionado = +u.alum_grupo;
  }

}
