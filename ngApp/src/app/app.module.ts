import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { DrinksComponent } from './drinks/drinks.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    DrinksComponent,
    MyCartComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'food',
        component: FoodsComponent
      },
      {
        path: 'drink',
        component: DrinksComponent
      },
      {
        path: 'cart',
        component: MyCartComponent
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
      }
    ])
  ],
  providers: [AuthService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
