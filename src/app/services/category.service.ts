import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends RequestBaseService {

  private baseUrl = 'http://localhost:8080/api/category';

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  public get (id: any): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/get/${id}`);
  }

  public getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl +'/all');
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + '/save', category, {headers: this.getHeaders});
  }

  public updateCategory(id: any, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/update/${id}`, category, {headers: this.getHeaders});
  }

  public deleteCategory(categoryId: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${categoryId}`, {headers: this.getHeaders});
  }
}
