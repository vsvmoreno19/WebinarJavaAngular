import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }
  private baseURL = `http://localhost:8028/`;

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}topics`)
  }
 getDataById(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}topics/${id}`)
  }
  saveData(data: any): Observable<any> {
    const body: string = JSON.stringify(data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
  console.log(headers);
    return this.http.post<any>(this.baseURL+ 'topics', body,{ headers: headers})
  }

 updateData(data: any, id: string): Observable<any> {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json' });
    return this.http.put(`${this.baseURL}topics/${id}`, data,{ headers: headers})
  }

  deleteData(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    return this.http.delete(`${this.baseURL}topics/${id}`,{ headers: headers})
  }
}
