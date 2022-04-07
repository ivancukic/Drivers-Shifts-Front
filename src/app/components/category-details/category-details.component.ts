import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  currentCategory: Category = {};

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  updateCategory() {

    this.categoryService.updateCategory(this.currentCategory.id, this.currentCategory).subscribe(

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  deleteCategory() {

    this.categoryService.deleteCategory(this.currentCategory.id).subscribe(

      response => {

        console.log(response);
        this.router.navigate(['/category']);
      },
      error => {
        console.log(error);
      }
    )
  }
}
