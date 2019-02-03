import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  codigo: string;
  reporte: any = [];
  alumnoCompleto: any = [];

  constructor(
    private alumnosService: AlumnosService
  ) { }

  ngOnInit() {
    this.codigo = "1110599087";
  }

  GeneraReporte(){
    if(this.codigo != null){
      this.alumnosService.getAlumno(this.codigo).subscribe(
        res => {
          if(res[0] != null){
            this.alumnoCompleto = res[0];
            this.alumnosService.getReporte(this.codigo).subscribe(
              res => {
                this.reporte = res;
                for(let i: number = 0; i < this.reporte.length; i++){
                  this.reporte[i].total = (this.reporte[i]['alumate_primer_periodo'] + this.reporte[i]['alumate_segundo_periodo'])/2;
                }
                console.log(this.reporte);
              },
              err => alert('Error al traer los datos')
            );
          }
          else{
            alert('No se ha encontrado el alumno');
          }
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      alert('Ingrese el código del alumno');
    }
  }

}
