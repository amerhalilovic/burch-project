import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodsComponent } from './foods/foods.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {MyCartComponent} from './my-cart/my-cart.component';
import {DrinksComponent} from './drinks/drinks.component';
import {AdminComponent} from './admin/admin.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [ {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'food',
  component: FoodsComponent,
  canActivate:[AuthGuard]
},
{
  path: 'drink',
  component: DrinksComponent,
  canActivate:[AuthGuard]
},
{
  path: 'cart',
  component: MyCartComponent,
  canActivate:[AuthGuard]
}, {
  path: 'login',
  component: LoginComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
