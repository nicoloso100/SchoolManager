import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MateriasService } from "../../../services/materias.service";

@Component({
  selector: 'app-registro-materias',
  templateUrl: './registro-materias.component.html',
  styleUrls: ['./registro-materias.component.css']
})
export class RegistroMateriasComponent implements OnInit {

  dias: any = [];
  horas: any = [];
  grupos: any = [];

  CamposIndex: number = 0;
  CamposDiaHora: number[]= [0];

  sendDiaHora: Array<Array<number>>;
  row: Array<number>;

  registroMateria: any = {
    mate_id: 0,
    mate_nombre: '',
    mate_grupo: 1
  }

  registroHorarioMateria: any = {
    materias_mate_id: 0,
    horarios_hora_id: 0,
    dias_id: 0
  } 

  constructor(
    private materiasService: MateriasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sendDiaHora = new Array<Array<number>>();
    this.sendDiaHora[0] = new Array<number>(1,1);

    this.materiasService.getAutoIncrement().subscribe(
      res => {
        this.registroMateria.mate_id = String(res[0][0]['AUTO_INCREMENT']);
      },
      err => console.log(err)
    );
    this.materiasService.getDias().subscribe(
      res => {
        this.dias = res[0];
      },
      err => console.log(err)
    );
    this.materiasService.getHoras().subscribe(
      res => {
        this.horas = res[0];
      },
      err => console.log(err)
    );
    this.materiasService.getGrupos().subscribe(
      res => {
        this.grupos = res[0];
      },
      err => console.log(err)
    );
  }

  agregaCampo(){
    this.CamposIndex++;
    this.sendDiaHora[this.CamposIndex] = new Array<number>(1,1);
    this.CamposDiaHora.push(this.CamposIndex);
  }

  eliminaCampo(){
    if(this.CamposIndex >= 1){
      this.CamposDiaHora.splice(this.CamposIndex, this.CamposIndex);
      this.sendDiaHora.splice(this.CamposIndex, this.CamposIndex);
      this.CamposIndex--;
    }
  }

  selectChangeGrupo (event: any) {
    this.registroMateria.mate_grupo = +event.target.value;
  }

  selectChangeDia (event: any, campo: number) {
    this.sendDiaHora[campo][0] = +event.target.value;
  }

  selectChangeHora (event: any, campo: number) {
    this.sendDiaHora[campo][1] = +event.target.value;
  }

  saveMateria(){
    if(this.noRepetidos() == true){
      this.registroMateria.mate_id = +this.registroMateria.mate_id;
      this.materiasService.saveMateria(this.registroMateria).subscribe(
        res =>{
          console.log(res);
          if(res['text'] == "ok"){
            let noErrores: boolean = true;
            for(let row of this.sendDiaHora){
              this.registroHorarioMateria.materias_mate_id = this.registroMateria.mate_id;
              this.registroHorarioMateria.dias_id = row[0];
              this.registroHorarioMateria.horarios_hora_id = row[1];
              this.materiasService.saveHorario(this.registroHorarioMateria).subscribe(
                res =>{
                  if(res['text'] != "ok"){
                    noErrores = false;
                  }
              });
            }
            if(!noErrores)  {
              alert('algunas materias no se han podido asignar');
            }
            this.router.navigate(['/materias']);
          }
          else{
            alert('Error al insertar la materia');
          }
        },
        err =>{
          alert('No se ha podido comunicar con la API');
        }
      );
    }
    else{
      alert('Hay campos repetidos');
    }
  }

  noRepetidos(): boolean{
    let resultado: boolean = true;
    for(let i: number = 0; i < this.sendDiaHora.length; i++){
      for(let j: number = 0; j < this.sendDiaHora.length; j++){
        if(i != j && (this.sendDiaHora[i][0] == this.sendDiaHora[j][0] && this.sendDiaHora[i][1] == this.sendDiaHora[j][1])){
          resultado = false;
        }
      } 
    }
    return resultado;
  }
}

