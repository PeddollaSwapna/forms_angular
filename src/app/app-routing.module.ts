import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFromsComponent } from './reactive-froms/reactive-froms.component';


const routes: Routes = [
 {path:'tdf',component:TemplateDrivenFormsComponent},
 {path:'mdf',component:ReactiveFromsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
