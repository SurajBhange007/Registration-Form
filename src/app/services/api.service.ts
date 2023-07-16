import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string ="http://localhost:3000/enquiry"
  constructor(private http:HttpClient) { }

  postRegistration(user:User){
    return this.http.post<User>(`${this.baseUrl}`,user);
  }

  getRegisteredUser(){
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  updateRegisterUser(user:User, id:number){
    return this.http.put<User>(`${this.baseUrl}/${id}`,user);
  }

  deleteRegisterUser(id:number){
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }
  
  getRegisteredUserWithId(id:number){
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

}
