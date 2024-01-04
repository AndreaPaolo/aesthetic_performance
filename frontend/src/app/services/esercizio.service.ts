import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

import { Esercizio } from '../model_body';
import { Esercizzi } from "../model";

@Injectable({
  providedIn: 'root'
})
export class EsercizioService {

  private _url: string = "http://localhost:8080/";
  private esercizzi: Subject<Esercizzi[]>;

  constructor(private http: HttpClient) {
    this.esercizzi = new Subject<Esercizzi[]>();
  }

  getEsercizzi(): Observable<Esercizzi[]> {
    return this.esercizzi.asObservable();
  }

  loadEsercizzi(): void{
    this.http.get<Esercizzi[]>(this._url + 'api/esercizio').subscribe(res => this.esercizzi.next(res));
  }

  // Da implementare
  getEsercizioBySchedaId(scheda_id: number): void{
    this.http.get<Esercizzi[]>(this._url + 'api/esercizio/schedaid/' + scheda_id).subscribe(res => this.esercizzi.next(res));
  }

  getEsercizio(esercizio_id: number){
    return this.http.get(this._url + 'api/esercizio/' + esercizio_id);
  }

  aggiungiEsercizio(esercizio: Esercizio){
    return this.http.post(this._url + "api/esercizio", esercizio);
  }

  modificaEsercizio(esercizio: Esercizio){
    return this.http.put(this._url + 'api/esercizio/' + esercizio.id, esercizio);
  }

  eliminaEsercizio(esercizio_id: number){
    return this.http.delete(this._url + "api/esercizio/" + esercizio_id);
  }
}
