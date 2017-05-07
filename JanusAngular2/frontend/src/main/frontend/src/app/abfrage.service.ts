import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { TableItem }  from './TableItem';


@Injectable()
export class AbfrageService {

  private query:string;
  private http:Http;
 	
  constructor(h:Http) { this.http = h;}
  
  setAbfrageText ( q:string) {
  		this.query = q;
  }
  
  getResultList() : Observable<TableItem[]> {
     return this.http.get(this.query).map(res => res.json());
  }

}
