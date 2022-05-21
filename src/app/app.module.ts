import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddLineComponent } from './components/add-line/add-line.component';
import { LineDetailsComponent } from './components/line-details/line-details.component';
import { LineListComponent } from './components/line-list/line-list.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { AddShiftOneDriverComponent } from './components/add-shift-one-driver/add-shift-one-driver.component';
import { AddShiftTwoDriverComponent } from './components/add-shift-two-driver/add-shift-two-driver.component';
import { AddShiftThreeDriverComponent } from './components/add-shift-three-driver/add-shift-three-driver.component';
import { ActiveDriverPipe } from './pipes/active-driver.pipe';
import { DriversShiftsListComponent } from './components/drivers-shifts-list/drivers-shifts-list.component';
import { DriversShiftsDetailsComponent } from './components/drivers-shifts-details/drivers-shifts-details.component';
import { ShiftLinePipe } from './pipes/shift-line.pipe';
import { ShiftDriverPipe } from './pipes/shift-driver.pipe';
import { CategoryReadComponent } from './components/category-read/category-read.component';
import { LineReadComponent } from './components/line-read/line-read.component';
import { DriversShiftsReadComponent } from './components/drivers-shifts-read/drivers-shifts-read.component';
import { DriverReadComponent } from './components/driver-read/driver-read.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    DetailComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    DriverListComponent,
    AddDriverComponent,
    AddCategoryComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    AddLineComponent,
    LineDetailsComponent,
    LineListComponent,
    DriverDetailsComponent,
    CategoryNamePipe,
    UsernamePipe,
    AddShiftOneDriverComponent,
    AddShiftTwoDriverComponent,
    AddShiftThreeDriverComponent,
    ActiveDriverPipe,
    DriversShiftsListComponent,
    DriversShiftsDetailsComponent,
    ShiftLinePipe,
    ShiftDriverPipe,
    CategoryReadComponent,
    LineReadComponent,
    DriversShiftsReadComponent,
    DriverReadComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
