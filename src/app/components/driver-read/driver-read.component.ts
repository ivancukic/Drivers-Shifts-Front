import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Driver } from 'src/app/models/driver';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-read',
  templateUrl: './driver-read.component.html',
  styleUrls: ['./driver-read.component.css']
})
export class DriverReadComponent implements OnInit {

  currentDriver: Driver = {};
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

}
