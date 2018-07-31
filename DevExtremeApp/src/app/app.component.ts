import { NgModule, Component, Inject, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, HttpModule } from '@angular/http';

import { DxDataGridModule, DxTemplateHost } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import {GridPacienteService, Titles} from './paciente.service';



@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  dataSource: any = {};
  jsonData: any = {};
  titulos: Titles[];
  serviciosPac: any = {};

  constructor(private gridPacienteService: GridPacienteService){

    this.titulos = gridPacienteService.getTabTitles();
   

    this.dataSource.store = new CustomStore({
      load: function (loadOptions: any) {
          var params = '?';
          params += 'skip=' + loadOptions.skip || 0;
          params += '&take=' + loadOptions.take || 12;         
          return gridPacienteService.getPatientList(params)       
      },
      insert: function(values){       
        return{

        }
      },     
      update: function(key,values){
        return{
          
        }
      },
      remove: function(key){
        return{
          store: new CustomStore({
            load: function(loadOptions: any){
              return{
                
              }
            }
          })
        }
      }
  });
  }

  getMasterDetailPaciente(paciente:any) : void { 
    
  }

  
  public getListSrvPac(idPaciente:number) : any{

    return this.gridPacienteService.getServiciosPac();
    
  }


/*
  getPatientData() : any{
    this.gridPacienteService.getPatientList().subscribe((records)=> this.jsonData = records);
    console.log()
    return{
      data: this.jsonData.pacientes,
      totalCount: this.jsonData.totalCount,
    }
  }

  /*
  constructor(@Inject(Http) http: Http) {
    this.dataSource.store = new CustomStore({
        load: function (loadOptions: any) {
            var params = '?';
            params += 'skip=' + loadOptions.skip || 0;
            params += '&take=' + loadOptions.take || 12;         
            return http.get('http://localhost:65127/api/Patient' + params)
                .toPromise()
                .then(response => {
                    var json = response.json();
                    console.log(json);
                    return {
                        data: json.pacientes,
                        totalCount: json.totalCount
                    }
                })
                .catch(error => { throw 'Data Loading Error' });
        },      
    });
  }
  */


}



