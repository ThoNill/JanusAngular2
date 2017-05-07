import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


export class TableColumnDescription {
   name : string;
   bs : BehaviorSubject<any>; 
   obs : Observable<any>
   
   constructor(name : string) {
   		this.name = name;
   }
}