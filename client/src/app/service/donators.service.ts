import { inject, Injectable } from '@angular/core';
import { Donator } from '../models/donator.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonatorsService {

  BASE_URL_D = 'http://localhost:5000/donater';
  http: HttpClient = inject(HttpClient);
  donatorssList: Donator[] = [];
  constructor() { 
    this.list$=this.get();
  }
 list$=this.get();
  getAll(){
 this.get().subscribe(data=>{
 this.donatorssList=data;
 })
 }
  get(): Observable<Donator[]>{
    return this.http.get<Donator[]>(this.BASE_URL_D+'/get');
  }

  getById(id: number): Observable<Donator>{
    return this.http.get<Donator>(this.BASE_URL_D + '/' + id);
  }

  update(item : Donator): Observable<Donator> {
    return this.http.put<Donator>(this.BASE_URL_D+"/update", item);
  }

  add(item: Donator): Observable<Donator>{
    return this.http.post<Donator>(this.BASE_URL_D+'/add', item);
  }

  delete(id: number){
    return this.http.delete(this.BASE_URL_D+"/delete/"+ id);
  }
  refresh(){
    this.list$=this.get();
  }
}
