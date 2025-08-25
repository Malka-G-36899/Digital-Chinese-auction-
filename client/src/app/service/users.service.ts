import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL_C = 'http://localhost:5000/user';
  http: HttpClient = inject(HttpClient);
  usersList: User[] = [];
  userGift: number[] = [];

  constructor() {
    this.list$ = this.get();
  }

  list$ = this.get();
  getAll() {
    this.get().subscribe(data => {
      this.usersList = data;
    })
  }
  
  get(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL_C + '/getAll');
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(this.BASE_URL_C + '/' + id);
  }

  update(item: User): Observable<User> {
    return this.http.put<User>(this.BASE_URL_C + "/update", item);
  }
  
  add(item: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL_C + '/add', item);
  }

  delete(id: number) {
    return this.http.delete(this.BASE_URL_C + "/delete/" + id);
  }
  refresh() {
    this.list$ = this.get();
  }
}
