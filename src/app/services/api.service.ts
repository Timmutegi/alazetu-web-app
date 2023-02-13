import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  post(endpoint: string, data: JSON) {
    return this.http.post<any>(this.baseUrl + endpoint, data);
  }

  patch(endpoint: string, data: JSON) {
    return this.http.patch<any>(this.baseUrl + endpoint, data);
  }
}
