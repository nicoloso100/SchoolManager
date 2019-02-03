import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../../../services/materias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elimina-materia',
  templateUrl: './elimina-materia.component.html',
  styleUrls: ['./elimina-materia.component.css']
})
export class EliminaMateriaComponent implements OnInit {

  idMateria: number;

  materia: any = {
    mate_id: 0,
    mate_nombre: '',
    grup_indicativo: ''
  }

  constructor(
    private materiasService: MateriasService,
    private router: Router) { }

  ngOnInit() {
    this.idMateria = this.materiasService.materiaSeleccionada;
    if(this.idMateria != null){
      this.materiasService.getMateria(this.idMateria).subscribe(
        res => {
          this.materia = res[0][0];
        },
        err => alert('Error al traer los datos')
      );
    }
    else{
      this.router.navigate(['/materias']);
    }
  }

  Cancelar(){
    this.router.navigate(['/materias']);
  }

  eliminarMateria(){
    this.materiasService.deleteMateria(this.idMateria).subscribe(
      res => {
        console.log(res);
        if(res['text'] == "ok"){
          this.router.navigate(['/materias']);
        }
        else{
          alert('Error al eliminar la materia');
        }
      },
      err => alert('No se ha podido comunicar con la API')
    );
  }
}
