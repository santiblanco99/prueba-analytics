import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Commerce} from "../models/Commerce";
import { Graph } from '../models/Graph';
@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(private http: HttpClient) { }

  getCommerces(): Observable<Commerce[]> {
    return this.http.get<Commerce[]>("https://alw-lab.herokuapp.com/commerces/");
  }

  getCommercesLayer(): Observable<any>{
    return this.http.get<any>("https://alw-lab.herokuapp.com/commerces/layer");
  }

  getCommerceGraph(): Observable<Graph[]>{
    return this.http.get<Graph[]>("https://alw-lab.herokuapp.com/commerces/graph");
  }
}
