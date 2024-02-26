// frontend/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { EditquizComponent } from './editquiz/editquiz.component';
import { ViewquizComponent } from './viewquiz/viewquiz.component';
import { TrailComponent } from './trail/trail.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
{
path:'home',component:HomeComponent
},
{
  path:'addquiz',component:AddquizComponent
  },
{

path:'editquiz',component:EditquizComponent
},
{
  path:'viewquiz',component:ViewquizComponent
// path:'viewquiz',loadChildren: () => import('./viewquiz/viewquiz.component').then(m => m.ViewquizComponent)
},
{
path:'trail',component:TrailComponent
},
{ path: '**', redirectTo: '/login' },


  // Redirect to home if the URL is invalid
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
