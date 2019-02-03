import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../services/alumnos.service';
import { Router } from '@angular/router';
import { MateriasService } from '../../../services/materias.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  idAlumno: string;
  materias: any = [];

  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private materiasService: MateriasService
  ) { }

  ngOnInit() {
    //this.idAlumno = this.alumnosService.alumnoSeleccionado;
    this.idAlumno = "1110599087";
    if(this.idAlumno != null){
      this.alumnosService.seleccionMateria(this.idAlumno).subscribe(
        res => {
          this.materias = res[0];
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/alumnos']);
    }
  }
  guardaCambios(){
    for(let i: number = 0; i < this.materias.length; i++){
      this.materias[i]['alum_codigo'] = this.idAlumno;
      console.log(this.materias[i]);
      this.alumnosService.saveCalificaciones(this.materias[i]).subscribe(
        res => {
          console.log(res);
          if(res['text'] == "ok"){
            this.router.navigate(['/alumnos']);
          }
          else{
            alert('Error al insertar las calificaciones');
          }
        },
        err => alert('Error al guardar los datos')
      );
    }
  }
}
