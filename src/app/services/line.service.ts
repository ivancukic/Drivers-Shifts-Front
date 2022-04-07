import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Line } from '../models/line';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  private baseUrl = 'http://localhost:8080/api/line';

  constructor(private http: HttpClient) { }

  public get(id: any): Observable<Line> {
    return this.http.get<Line>(`${this.baseUrl}/get/${id}`);
  }

  public getLineList(): Observable<Line[]> {
    return this.http.get<Line[]>(this.baseUrl +'/all');
  }

  public addLine(line: Line): Observable<Line> {
    return this.http.post<Line>(this.baseUrl + '/save', line);
  }

  public updateLine(id: any, line: Line) {
    return this.http.put<Line>(`${this.baseUrl}/update/${id}`, line);
  }

  public deleteLine(lineId: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${lineId}`);
  }

}
