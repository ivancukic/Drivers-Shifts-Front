import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Line } from '../models/line';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  private baseUrl = 'http://localhost:8080/api/shift';

  constructor(private http: HttpClient) { }

  public get(id: any): Observable<Line> {
    return this.http.get<Line>(`${this.baseUrl}/get/${id}`);
  }

  // public getShiftList(): Observable<Line[]> {
  //   return this.http.get<Line[]>(this.baseUrl +'/all');
  // }

  public updateShiftOne(id: any, shift: Line, driverOneId?: any): Observable<Line> {

    const params = new HttpParams()
                       .set('driverOneId', driverOneId)
                       .set('operacija',"U");

    return this.http.put<Line>(`${this.baseUrl}/updateOne/${id}`, shift,  {params} );
  }

  public updateShiftTwo(id: any, shift: Line, driverOneId?: any, driverTwoId?: any): Observable<Line> {

    const params = new HttpParams()
                       .set('driverOneId', driverOneId)
                       .set('driverTwoId', driverTwoId)

    return this.http.put<Line>(`${this.baseUrl}/updateTwo/${id}`, shift,  {params} );
  }
  public updateShiftThree(id: any, shift: Line, driverOneId?: any, driverTwoId?: any, driverThreeId?: any): Observable<Line> {

    const params = new HttpParams()
                       .set('driverOneId', driverOneId)
                       .set('driverTwoId', driverTwoId)
                       .set('driverThreeId', driverThreeId)

    return this.http.put<Line>(`${this.baseUrl}/updateThree/${id}`, shift,  {params} );
  }

  // public deleteShift(shiftId: any): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/delete/${shiftId}`);
  // }
}
