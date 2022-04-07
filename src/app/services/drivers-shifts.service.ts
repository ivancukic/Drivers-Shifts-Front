import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriversShifts } from '../models/drivers-shifts';
import { Shift } from '../models/shift.enum';

@Injectable({
  providedIn: 'root'
})
export class DriversShiftsService {

  private baseUrl = 'http://localhost:8080/api/schedule';

  constructor(private http: HttpClient) { }

  public get(id: any): Observable<DriversShifts> {
    return this.http.get<DriversShifts>(`${this.baseUrl}/get/${id}`);
  }

  public getDriversShiftsList(): Observable<DriversShifts[]> {
    return this.http.get<DriversShifts[]>(this.baseUrl +'/all');
  }

  public changeShifts(id: any, driversShifts: DriversShifts): Observable<DriversShifts> {
    return this.http.put<DriversShifts>(`${this.baseUrl}/changeShift/${id}`, driversShifts );
  }

}
