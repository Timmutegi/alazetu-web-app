import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://alazetunodejsbackend.onrender.com/api';

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint: string) {
    return this.http.get<any>(this.baseUrl + endpoint);
  }

  login(endpoint: string, data: JSON): Observable<string> {
    return this.http.post(this.baseUrl + endpoint, data, { responseType: 'text' });
  }

  post(endpoint: string, data: JSON) {
    return this.http.post<any>(this.baseUrl + endpoint, data);
  }

  patch(endpoint: string, data: JSON) {
    return this.http.patch<any>(this.baseUrl + endpoint, data);
  }

  getwithAuth(endpoint: string): Observable<any> {
    const authToken = localStorage.getItem('authToken') ?? '';
    const headers = new HttpHeaders().set('X-Auth-Token', authToken);
    return this.http.get(this.baseUrl + endpoint, { headers });
  }
}
