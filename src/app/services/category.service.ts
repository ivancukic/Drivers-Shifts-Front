import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }

  public get (id: any): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/get/${id}`);
  }

  public getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl +'/all');
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + '/save', category);
  }

  public updateCategory(id: any, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/update/${id}`, category);
  }

  public deleteCategory(categoryId: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${categoryId}`);
  }
}
