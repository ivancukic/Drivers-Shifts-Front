import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';




@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://localhost:8080/api/driver';

  constructor(private http: HttpClient) { }

  public get(id: any): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/get/${id}`);
  }

  public getDriverList(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseUrl +'/all');
  }

  public addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(this.baseUrl + '/save', driver);
  }

  public updateDriver(id: any, driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/update/${id}`, driver);
  }

  public deleteDriver(driverId: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${driverId}`);
  }

}
