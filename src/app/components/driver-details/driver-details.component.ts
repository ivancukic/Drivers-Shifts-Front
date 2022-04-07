import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Driver } from 'src/app/models/driver';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  currentDriver: Driver = {};
  categories: Category[] = [];
  currentUser: User = new User;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
      });
    }

  ngOnInit(): void {
    this.getDriver(this.route.snapshot.params.id);
    this.retriveCategories();
  }

  getDriver(id: string) {

    this.driverService.get(id).subscribe (
      data => {
        this.currentDriver = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateDriver() {

    this.driverService.updateDriver(this.currentDriver.id, this.currentDriver).subscribe (

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  deleteDriver() {

    this.driverService.deleteDriver(this.currentDriver.id).subscribe (

      response => {

        console.log(response);
        this.router.navigate(['/drivers']);
      },
      error => {
        console.log(error);
      }
    )
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
