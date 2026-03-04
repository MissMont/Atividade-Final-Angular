import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  buscarUsuarioPorId(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`);
  }

}
