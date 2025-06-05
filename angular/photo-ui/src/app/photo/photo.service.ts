import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PhotoResponse {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://localhost:8000/api/random-photo/';

  constructor(private http: HttpClient) {}

  getRandomPhoto(): Observable<PhotoResponse> {
    return this.http.get<PhotoResponse>(this.apiUrl);
  }
}
