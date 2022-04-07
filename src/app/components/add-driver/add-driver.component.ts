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
  currentCategory: Category = {}; // OVO MI NE TREBA, JEDINO AKO USPEOM SA ID DA POZOVEM NA BACKENDU
  categories: Category[] = [];
  currentUser: User = new User;
  selectedCategory: number = 0; // OVO MI NE TREBA

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

        console.log("id je "  + this.driver.id);
        console.log("name je "  + this.driver.name);
        console.log("dob je "  + this.driver.dob);
        console.log("category ID je "  + this.driver.category!.id);
        console.log("category NAME je "  + this.driver.category!.name);
        // console.log("Admin ID je "  + this.driver.user!.id);
        // console.log("Admin NAME je "  + this.driver.user!.name);
        // console.log("Admin USERNAME je "  + this.driver.user!.name);

        console.log(response);

        this.submitted = true;
      },
      error => {
        console.log("id je "  + this.driver.id);
        console.log("name je "  + this.driver.name);
        console.log("dob je "  + this.driver.dob);
        console.log("category ID je "  + this.driver.category!.id);
        console.log("category NAME je "  + this.driver.category!.name);
        // console.log("Admin ID je "  + this.driver.user!.id);
        // console.log("Admin NAME je "  + this.driver.user!.name);
        // console.log("Admin USERNAME je "  + this.driver.user!.name);
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
