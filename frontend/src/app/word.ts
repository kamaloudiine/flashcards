import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordService {

  private apiUrl = 'http://localhost:8080/words';

  constructor(private http: HttpClient) {}

  getWords(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addWord(word: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, word);
  }

  getRandomWord(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }
}