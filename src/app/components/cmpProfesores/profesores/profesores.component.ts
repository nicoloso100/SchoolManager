import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../../services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

profesores: any = [];

  constructor(
    private profesoresService: ProfesoresService
  ) { }

  ngOnInit() {
    this.profesoresService.getProfesores().subscribe(
      res => {
        this.profesores = res[0];
      },
      err => alert('Error al traer los datos')
    );
  }

  RowSelected(u:any){
    this.profesoresService.profesorSeleccionado = u.prof_codigo;
  }
}
