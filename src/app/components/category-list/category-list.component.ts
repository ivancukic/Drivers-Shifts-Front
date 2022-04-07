import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category = {};
  currentIndex: number = -1;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.retriveCategories();
  }

  retriveCategories() {

    this.categoryService.getCategoryList().subscribe (

      data => {
        this.categories = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  setActiveCategory(category: Category, index: number): void {

    this.currentCategory = category;
    this.currentIndex = index;
  }

}
