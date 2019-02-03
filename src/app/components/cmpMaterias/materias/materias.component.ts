import { Component, OnInit } from '@angular/core';

import { MateriasService } from "../../../services/materias.service";

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  grupos: any = [];

  materias: any = [];

  constructor(private materiasService: MateriasService) { }

  ngOnInit() {
    this.materiasService.getGrupos().subscribe(
      res => {
        this.grupos = res[0];
      },
      err => console.log(err)
    );

    this.CargaMaterias(1);
  }

  RowSelected(u:any){
    this.materiasService.materiaSeleccionada = +u.mate_id;
  }

  selectChangeHandler (event: any) {
    this.CargaMaterias(+event.target.value);
  }

  CargaMaterias(id: number){
    this.materiasService.getMaterias(id).subscribe(
      res => {
        this.materias = res[0];
      },
      err => alert('Error al traer los datos')
    );
  }

}
