import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

//  @Input() category!: Category; // JA SAM DODAO !
//  @Output() categorySaved: EventEmitter<Category> = new EventEmitter();
  submitted = false;
  category: Category = {};

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

//  saveCategory() {

//    this.categoryService.addCategory(this.category).subscribe(
//      response => {
//        console.log('Category saved', response);
//        this.categorySaved.emit(response);
//        this.submitted = true;
//      },
//      error => {
//        console.log(error);
//      });
//  }

  saveCategory() {

    const data = {
      name: this.category.name
    };
    this.categoryService.addCategory(data).subscribe (
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

}
