import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private URL: string = 'http://localhost:3000/rest/rest_package/findAll/json';

  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
}
