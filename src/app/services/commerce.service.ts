import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Commerce} from "../models/Commerce";
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
}
