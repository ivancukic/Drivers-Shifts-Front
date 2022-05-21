import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Line } from '../models/line';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService extends RequestBaseService {

  private baseUrl = 'http://localhost:8080/api/shift';

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  public get(id: any): Observable<Line> {
    return this.http.get<Line>(`${this.baseUrl}/get/${id}`);
  }

  public updateShiftOne(id: any, shift: Line, driverOneId?: any): Observable<Line> {

    const params = new HttpParams()
                       .set('driverOneId', driverOneId);

    return this.http.put<Line>(`${this.baseUrl}/updateOne/${id}`, shift,  {params, headers: this.getHeaders});
  }

  public updateShiftTwo(id: any, shift: Line, driverOneId?: any, driverTwoId?: any): Observable<Line> {

    const params = new HttpParams()
                       .set('driverOneId', driverOneId)
                       .set('driverTwoId', driverTwoId);

    return this.http.put<Line>(`${this.baseUrl}/updateTwo/${id}`, shift,  {params, headers: this.getHeaders});
  }
  public updateShiftThree(id: any, shift: Line, driverOneId?: any, driverTwoId?: any, driverThreeId?: any): Observable<Line> {

    const params = new HttpParams()
                       .set('driverOneId', driverOneId)
                       .set('driverTwoId', driverTwoId)
                       .set('driverThreeId', driverThreeId);

    return this.http.put<Line>(`${this.baseUrl}/updateThree/${id}`, shift,  {params, headers: this.getHeaders});
  }

}
