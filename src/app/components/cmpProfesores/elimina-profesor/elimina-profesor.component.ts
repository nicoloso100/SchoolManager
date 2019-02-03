import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elimina-profesor',
  templateUrl: './elimina-profesor.component.html',
  styleUrls: ['./elimina-profesor.component.css']
})
export class EliminaProfesorComponent implements OnInit {

  idProfesor: string;

  profesorCompleto: any = [];

  constructor(
    private profesoresService: ProfesoresService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idProfesor = this.profesoresService.profesorSeleccionado;
    if(this.idProfesor != null){
      this.profesoresService.getProfesor(this.idProfesor).subscribe(
        res => {
          this.profesorCompleto = res[0];
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/profesores']);
    }
  }

  Cancelar(){
    this.router.navigate(['/profesores']);
  }

  eliminarProfesor(){
    this.profesoresService.deleteProfesor(this.idProfesor).subscribe(
      res => {
        if(res['text'] == "ok"){
          this.router.navigate(['/profesores']);
        }
        else{
          alert('Error al eliminar el profesor');
        }
      },
      err => alert('No se ha podido comunicar con la API')
    );
  }
}
