import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./authentication/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./front_office/index/index.component";
const routes: Routes = [
  //  {path:'', redirectTo:'', pathMatch:'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  /*{
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'hotels',
    component: DashboardComponent
  },
  {
    path: 'hotel/:id',
    component: HotelDetailsComponent
  },
  {
    path: 'manager/users',
    component: ListUsersComponent
  },
  {
    path: 'manager/hotels',
    component: ListHotelComponent
  },*/
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
