import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  currentCategory: Category = {};

  constructor(
              private categoryService: CategoryService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.getCategory(this.route.snapshot.params.id);
  }

  getCategory(id: string) {

    this.categoryService.get(id).subscribe (
      data => {
        this.currentCategory = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
