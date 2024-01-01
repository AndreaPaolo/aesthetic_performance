import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Schede } from "../model";
import { Observable, Subject } from 'rxjs';
import { Scheda } from '../model_body';

@Injectable({
  providedIn: 'root'
})
export class SchedaService {

  private _url: string = "http://localhost:8080/";
  private schede: Subject<Schede[]>;

  constructor(private http: HttpClient) {
    this.schede = new Subject<Schede[]>();
  }

  getSchede(): Observable<Schede[]> {
    return this.schede.asObservable();
  }

  loadSchede(): void{
    this.http.get<Schede[]>(this._url + 'api/scheda').subscribe(res => this.schede.next(res));
  }

  getScheda(scheda_id: number){
    return this.http.get(this._url + 'api/scheda/' + scheda_id);
  }

  aggiungiScheda(scheda: Scheda){
    return this.http.post(this._url + "api/scheda", scheda);
  }

  modificaScheda(scheda: Scheda){
    return this.http.put(this._url + 'api/scheda/' + scheda.id, scheda);
  }

  eliminaScheda(scheda_id: number){
    return this.http.delete(this._url + "api/scheda/" + scheda_id);
  }
}
