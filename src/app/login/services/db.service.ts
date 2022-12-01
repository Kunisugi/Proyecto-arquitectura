import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private api_db = 'https://data.mongodb-api.com/app/data-jvbxz/endpoint/data/v1';
  private comportamientoListar = new BehaviorSubject<Array<any>>([]);
  public listarProductos$ = this.comportamientoListar.asObservable();

  constructor(private http: HttpClient) { }

  public obtenerMasProductos(){
    this.http.get<Array<any>>(this.api_db).subscribe(data => {
      if(data){
        this.comportamientoListar.next(this.comportamientoListar.getValue().concat(data));
      }
    })
  }
}


