import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Gift } from '../models/gift.model';
import { HttpClient, HttpParams } from '@angular/common/http';
////////////////new code
import { BehaviorSubject } from 'rxjs';
///////////
@Injectable({
  providedIn: 'root'
})

export class PresentsService {
  ////////////////////////////new code
  private giftsSubject = new BehaviorSubject<Gift[]>([]);
  gifts$ = this.giftsSubject.asObservable();

  // getAll() {
  //   this.get().subscribe(data => {
  //     this.giftsSubject.next(data); // עדכון ה-BehaviorSubject
  //   });
  // }
  // update(item: Gift): Observable<Gift> {
  //   return this.http.put<Gift>(this.BASE_URL + "/update", item).pipe(
  //     tap(() => {
  //       // לאחר העדכון, רענן את רשימת המתנות
  //       this.getAll();
  //     })
  //   );
  // }
  ///////////////////////////////////
  BASE_URL = 'http://localhost:5000/present';
  http: HttpClient = inject(HttpClient);
  giftsList: Gift[] = [];
  constructor() { 
    this.list$=this.get();
  }
 list$=this.get();
  getAll(){
 this.get().subscribe(data=>{
 this.giftsList=data;
 this.list$.subscribe(d=>{
  return d;
 })
 })
 }
  get(): Observable<Gift[]>{
    return this.http.get<Gift[]>(this.BASE_URL+'/getAll');
  }

  getById(id: number): Observable<Gift>{
    return this.http.get<Gift>(this.BASE_URL + '/' + id);
  }

  update(item : Gift): Observable<Gift> {
    return this.http.put<Gift>(this.BASE_URL+"/update", item);
  }

  add(item: Gift): Observable<Gift>{
    return this.http.post<Gift>(this.BASE_URL+'/add', item);
  }

  delete(id: number){
    return this.http.delete(this.BASE_URL+"/delete/"+ id);
  }
  refresh(){
    this.list$=this.get();
  }
}

