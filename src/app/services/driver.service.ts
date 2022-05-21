import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Driver } from '../models/driver';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';




@Injectable({
  providedIn: 'root'
})
export class DriverService extends RequestBaseService {

  private baseUrl = 'http://localhost:8080/api/driver';

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  public get(id: any): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/get/${id}`);
  }

  public getDriverList(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseUrl +'/all');
  }

  public addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(this.baseUrl + '/save', driver, {headers: this.getHeaders});
  }

  public updateDriver(id: any, driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/update/${id}`, driver, {headers: this.getHeaders});
  }

  public deleteDriver(driverId: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${driverId}`, {headers: this.getHeaders});
  }

}
