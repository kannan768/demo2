// frontend/src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { EditquizComponent } from './editquiz/editquiz.component';
import { ViewquizComponent } from './viewquiz/viewquiz.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OrderbyPipe } from './orderby.pipe';
import { TrailComponent } from './trail/trail.component';
import { CustomDirective } from './custom.directive';
import { FilterPipe } from './filter.pipe';
import { TextonlyDirective } from './textonly.directive';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, AddquizComponent, EditquizComponent, ViewquizComponent, OrderbyPipe, TrailComponent, CustomDirective, FilterPipe, TextonlyDirective],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule,ReactiveFormsModule,NgMultiSelectDropDownModule], // Include the AppRoutingModule here
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
