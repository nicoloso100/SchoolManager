import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asigna-materias-profesor',
  templateUrl: './asigna-materias-profesor.component.html',
  styleUrls: ['./asigna-materias-profesor.component.css']
})
export class AsignaMateriasProfesorComponent implements OnInit {

  idProfesor: string;
  materias: any = [];
  saveMateSelec: any = [];

  constructor(
    private profesoresService: ProfesoresService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idProfesor = this.profesoresService.profesorSeleccionado;
    if(this.idProfesor != null){
      this.profesoresService.getMateriasProfesor(this.idProfesor).subscribe(
        res => {
          this.materias = res[0];
          for(let i: number = 0; i < this.materias.length; i++){
            if(this.materias[i]['profesores_prof_codigo'] != null){
              this.materias[i]['mate_seleccion'] = true;
            }
            else{
              this.materias[i]['mate_seleccion'] = false;
            }
          }
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/profesores']);
    }
  }
  onChecked(mate: any){
    mate.mate_seleccion = !mate.mate_seleccion;
  }

  saveMateSeleccion(){
    this.saveMateSelec[0] = this.profesoresService.profesorSeleccionado;
    this.profesoresService.deleteSelectMaterias(this.saveMateSelec).subscribe(
      res => {
        if(res['text'] == "ok"){
          for(let i: number = 0; i < this.materias.length; i++){
            if(this.materias[i]['mate_seleccion'] == true){
              this.saveMateSelec[0] = this.profesoresService.profesorSeleccionado;
              this.saveMateSelec[1] = this.materias[i]['mate_id'];
              this.profesoresService.saveSelectMaterias(this.saveMateSelec).subscribe(
                res => {
                  if(res['text'] != "ok"){
                    alert('Error al actualizar los datos'); 
                  }
                },
                err => alert('Error al traer los datos')
              );
            }
          }
          setTimeout(() => {
            this.router.navigate(['/profesores']);
          },
          300);
        }
        else{
          alert('Error al actualizar los datos');
        }
      },
      err => alert('Error al traer los datos')
    );
  }

}