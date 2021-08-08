import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }
  
  getUsersList(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.baseURL}`);
}


createUsers(user: Users): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, user);
}

getusersById(id: number): Observable<Users>{
  return this.httpClient.get<Users>(`${this.baseURL}/${id}`);
}

updateusers(id: number, users: Users): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, users);
}

deleteusers(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}

