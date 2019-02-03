import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserta-profesor',
  templateUrl: './inserta-profesor.component.html',
  styleUrls: ['./inserta-profesor.component.css']
})
export class InsertaProfesorComponent implements OnInit {

  fechaInscripcion: Date;

  profesorCompleto: any = {
    prof_codigo: '',
    prof_nombres: '',
    prof_apellidos: '',
    prof_telefono: '',
    prof_fecha_inscripcion: '',
    prof_email: ''
  };

  constructor(
    private profesoresService: ProfesoresService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveprofesor(){
    this.profesorCompleto.prof_fecha_inscripcion = this.fechaInscripcion.toLocaleDateString();
    this.profesoresService.saveProfesor(this.profesorCompleto).subscribe(
      res =>{
        console.log(res);
        if(res['text'] == "ok"){
          this.router.navigate(['/profesores']);
        }
        else{
          alert('Error al insertar el profesor, ¿ya existe?');
        }
      },
      err =>{
        alert('No se ha podido comunicar con la API');
      }
    );
  }

}
