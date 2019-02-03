import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-profesor',
  templateUrl: './edita-profesor.component.html',
  styleUrls: ['./edita-profesor.component.css']
})
export class EditaProfesorComponent implements OnInit {

  profesorCompleto: any = [];
  idProfesor: string;
  fechaInscripcion: Date;

  constructor(
    private profesoresService: ProfesoresService,
    private router: Router
  ) { }

  ngOnInit() {

    this.idProfesor = this.profesoresService.profesorSeleccionado;
    if(this.idProfesor != null){
      this.profesoresService.getProfesorCompleto(this.idProfesor).subscribe(
        res => {
          this.profesorCompleto = res[0];
          this.fechaInscripcion = new Date(this.profesorCompleto.prof_fecha_inscripcion);
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/profesores']);
    }
  }

  saveProfesor(){
    this.profesorCompleto.prof_fecha_inscripcion = this.fechaInscripcion.toLocaleDateString();
    this.profesorCompleto.prof_telefono = String(this.profesorCompleto.alum_telefono);
    this.profesoresService.updateProfesor(this.profesorCompleto, this.idProfesor).subscribe(
      res =>{
        if(res['text'] == "ok"){
          this.router.navigate(['/profesores']);
        }
        else{
          alert('Error al actualizar el profesor');
        }
      },
      err =>{
        alert('No se ha podido comunicar con la API');
      }
    );
  }
}
