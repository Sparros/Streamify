import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) {}

  getUserByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.usersUrl}?username=${username}`);
  }
}