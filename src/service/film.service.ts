import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmUrl = 'http://localhost:3000/films';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.filmUrl);
  }
}
