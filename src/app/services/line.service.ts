import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Line } from '../models/line';
import { RequestBaseService } from './request-base.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LineService extends RequestBaseService {

  private baseUrl = 'http://localhost:8080/api/line';

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  public get(id: any): Observable<Line> {
    return this.http.get<Line>(`${this.baseUrl}/get/${id}`);
  }

  public getLineList(): Observable<Line[]> {
    return this.http.get<Line[]>(this.baseUrl +'/all');
  }

  public addLine(line: Line): Observable<Line> {
    return this.http.post<Line>(this.baseUrl + '/save', line, {headers: this.getHeaders});
  }

  public updateLine(id: any, line: Line) {
    return this.http.put<Line>(`${this.baseUrl}/update/${id}`, line, {headers: this.getHeaders});
  }

  public deleteLine(lineId: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${lineId}`, {headers: this.getHeaders});
  }

}
