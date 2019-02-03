import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-profesor',
  templateUrl: './detalles-profesor.component.html',
  styleUrls: ['./detalles-profesor.component.css']
})
export class DetallesProfesorComponent implements OnInit {

  profesorCompleto: any = [];
  idProfesor: string;

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
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/profesores']);
    }
  }

  volver(){
    this.router.navigate(['/profesores']);
  }
}
