import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'precios',component:PreciosComponent},
  {path:'protegida',component:ProtegidaComponent},
  {path:'template-forms',component:TemplateFormsComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
