import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Driver } from 'src/app/models/driver';
import { User } from 'src/app/models/user.model';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers: Driver[] = [];
  currentDriver: Driver = {};
  currentIndex: number = -1;
  currentCategory: Category = {};

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.retriveDrivers();
  }

  retriveDrivers() {

    this.driverService.getDriverList().subscribe (

      data => {
        this.drivers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  setActiveDriver(driver: Driver, index: number): void {
    this.currentDriver =  driver;
    this.currentIndex = index;
  }

}
