import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../services/alumnos.service';
import { Router } from '@angular/router';
import { MateriasService } from '../../../services/materias.service';


@Component({
  selector: 'app-asigna-materias-alumno',
  templateUrl: './asigna-materias-alumno.component.html',
  styleUrls: ['./asigna-materias-alumno.component.css']
})

export class AsignaMateriasAlumnoComponent implements OnInit {

  selecciones: any = [];
  saveMateSelec: any = [];
  materias: any = [];

  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private materiasService: MateriasService
  ) { }

  ngOnInit() {
    if(this.alumnosService.alumnoSeleccionado != null 
      && this.alumnosService.alumnoGrupoSeleccionado != null){

      this.alumnosService.seleccionMateria(this.alumnosService.alumnoSeleccionado).subscribe(
        res => {
          this.selecciones = res[0];
          this.materiasService.getMaterias(this.alumnosService.alumnoGrupoSeleccionado).subscribe(
            res => {
              this.materias = res[0];
              for(let i: number = 0; i < this.materias.length; i++){
                for(let j: number = 0; j < this.selecciones.length; j++){
                  this.materias[i]['mate_seleccion'] = false;
                  if(this.materias[i]['mate_id'] == this.selecciones[j]['materias_mate_id']){
                    this.materias[i]['mate_seleccion'] = true;
                    j = this.selecciones.length;
                  }
                }
              }
            },
            err => alert('Error al traer los datos')
          );
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/alumnos']);
    }
  }

  onChecked(mate: any){
    mate.mate_seleccion = !mate.mate_seleccion;
  }

  saveMateSeleccion(){
    this.saveMateSelec[0] = this.alumnosService.alumnoSeleccionado;
    this.alumnosService.deleteSelectMaterias(this.saveMateSelec).subscribe(
      res => {
        if(res['text'] == "ok"){
          for(let i: number = 0; i < this.materias.length; i++){
            if(this.materias[i]['mate_seleccion'] == true){
              this.saveMateSelec[0] = this.alumnosService.alumnoSeleccionado;
              this.saveMateSelec[1] = this.materias[i]['mate_id'];
              this.saveMateSelec[2] = 0;
              this.saveMateSelec[3] = 0;
              this.alumnosService.saveSelectMaterias(this.saveMateSelec).subscribe(
                res => {
                  console.log(res);
                  if(res['text'] != "ok"){
                    alert('Error al actualizar los datos'); 
                  }
                },
                err => alert('Error al traer los datos')
              );
            }
          }
          this.router.navigate(['/alumnos']);
        }
        else{
          alert('Error al actualizar los datos');
        }
      },
      err => alert('Error al traer los datos')
    );
  }

}
