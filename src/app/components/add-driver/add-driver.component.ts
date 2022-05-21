import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Driver } from 'src/app/models/driver';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import { DriverService } from 'src/app/services/driver.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  submitted = false;
  driver: Driver = {};
  categories: Category[] = [];
  currentUser: User = new User;

  constructor(private driverService: DriverService,
              private categoryService: CategoryService,
              private authenticationService: AuthenticationService)
              {
                this.authenticationService.currentUser.subscribe(data => {
                  this.currentUser = data;
                });
              }

  ngOnInit(): void {
    this.retriveCategories();
  }

  saveDriver() {

    const data = {

      name: this.driver.name,
      dob: this.driver.dob,
      category: this.driver.category,
      user: this.currentUser,
      active: this.driver.active = true
    };

      this.driverService.addDriver(data).subscribe(
        response => {

          console.log(response);
          this.submitted = true;
        },
        error => {

          console.log(error);
        });
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

}
