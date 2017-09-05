import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, ResponseOptions, RequestOptions, Response } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Empresa } from "./empresa/empresa.model";

@Injectable()
export class EmpresasService {

  constructor(private http: Http

  ) { }





  gravarEmpresa(empresa: Empresa): Observable<Empresa>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    
    return this.http.post(`https://crudrestdash.herokuapp.com/gravar`,
               JSON.stringify(empresa),
               new RequestOptions({headers: headers}) 
            )
           .map(response => response.json())
  }

  getEmpresas(): Observable<Empresa[]>{

    return this.http.get(`https://crudrestdash.herokuapp.com/findempresa`)
           .map(response => response.json())
           .catch(this.handleError);
  }
          
    query() {
      return this.http.get(`http://192.168.49.151:8080/findAllEmpresas`).toPromise()
          .then((resp: Response) => ({
              items: resp.json(),
              count: Number(resp.headers.get('X-Total-Count'))
          }));
  }

  private handleError(error: any): Promise<any> {
    //this.stopLoading();
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
