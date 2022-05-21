import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { AddLineComponent } from './components/add-line/add-line.component';
import { AddShiftOneDriverComponent } from './components/add-shift-one-driver/add-shift-one-driver.component';
import { AddShiftThreeDriverComponent } from './components/add-shift-three-driver/add-shift-three-driver.component';
import { AddShiftTwoDriverComponent } from './components/add-shift-two-driver/add-shift-two-driver.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryReadComponent } from './components/category-read/category-read.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverReadComponent } from './components/driver-read/driver-read.component';
import { DriversShiftsDetailsComponent } from './components/drivers-shifts-details/drivers-shifts-details.component';
import { DriversShiftsListComponent } from './components/drivers-shifts-list/drivers-shifts-list.component';
import { DriversShiftsReadComponent } from './components/drivers-shifts-read/drivers-shifts-read.component';
import { LineDetailsComponent } from './components/line-details/line-details.component';
import { LineListComponent } from './components/line-list/line-list.component';
import { LineReadComponent } from './components/line-read/line-read.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role.enum';
import { AdminComponent } from './pages/admin/admin.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}},

  { path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard],
    data: {roles: [Role.ADMIN]}},

  { path: 'detail/:id',
    component: DetailComponent,
    canActivate:[AuthGuard],
    data: {roles: [Role.ADMIN]}},

  { path: '404', component: NotFoundComponent},
  { path: '401', component: UnauthorizedComponent},

  //CATEGORY START
  { path: 'category', component: CategoryListComponent },
  { path: 'categoryread/:id', component: CategoryReadComponent },
  { path: 'category/:id', component: CategoryDetailsComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  { path: 'categoryadd', component: AddCategoryComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  // CATEGORY END

  // LINE START
  { path: 'lines', component: LineListComponent },
  { path: 'linesread/:id', component: LineReadComponent },
  { path: 'lines/:id', component: LineDetailsComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  { path: 'linesadd', component: AddLineComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  // LINE END

  // SHIFT START
  { path: 'shiftsaddone/:id', component: AddShiftOneDriverComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  { path: 'shiftsaddtwo/:id', component: AddShiftTwoDriverComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  { path: 'shiftsaddthree/:id', component: AddShiftThreeDriverComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  // SHIFT END

  // DRIVERS-SHIFTS START
  { path: 'schedule', component: DriversShiftsListComponent },
  { path: 'scheduleread/:id', component: DriversShiftsReadComponent },
  { path: 'schedule/:id', component: DriversShiftsDetailsComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  // DRIVERS-SHIFTS END

  // DRIVER START
  { path: 'drivers', component: DriverListComponent },
  { path: 'driversread/:id', component: DriverReadComponent },
  { path: 'drivers/:id', component: DriverDetailsComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} },
  { path: 'driversadd', component: AddDriverComponent, canActivate:[AuthGuard], data: {roles: [Role.ADMIN]} }
  // DRIVER END

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {

    this.router.errorHandler = (error: any) => {

      this.router.navigate(['/404']);
    }
  }

 }
