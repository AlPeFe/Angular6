import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



export interface Paciente{

    pacientes: any;
    totalCount:string;

}

export class Titles{
    titulo: string;
    template?: any = {}; 
    data?: any = {};
}


let servicios: any[]=[{
    "NumeroServicio": "1234",
    "Programado": "Si",
    "TipoTraslado":"Camilla"

},{
    "NumeroServicio": "4563",
    "Programado": "Si",
    "TipoTraslado":"Camilla"

},{
    "NumeroServicio": "9812",
    "Programado": "No",
    "TipoTraslado":"Silla"

}]

let titulos: Titles[] =[{
    "titulo": "Datos Paciente",
    "template": "TemplateDatosPaciente",
    "data" : {
        "CIP" : "LOPE00045454",
        "DNI": "79812465K",
        
    } 
    
},{
    "titulo": "Direcciones",
    "template": "TemplateDirecciones",
    "data" : {
        "Calle" : "Calle tal",
        "Numero": "21",
        "Piso": "4ª"
    } 
},{
    "titulo": "Servicios",
    "template": "TemplateServicios",
},
]

@Injectable()
export class GridPacienteService {
    private url = 'http://localhost:65127/api/Patient';
    paciente: Paciente;
    
    constructor(private http: HttpClient) {}

    public getPatientList(params:string): any {
        return this.http.get<Paciente>('http://localhost:65127/api/Patient' + params)
        .toPromise()
        .then(response => {
            return {
                data: response.pacientes,
                totalCount: response.totalCount          
            }
        })
    }

    public getPatientDetail(id:number): any {
        return this.http.get<Paciente>('http://localhost:65127/api/Patient?id=' + id)
        .toPromise()
        .then(response => {
            console.log(response);
            return {
                data: response.pacientes,             
            }
        })  
    }

    public getTabTitles() : Titles[]{
        console.log(titulos);
        return titulos;
    }

    public getServiciosPac() : any{
        return servicios;
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }

    



}