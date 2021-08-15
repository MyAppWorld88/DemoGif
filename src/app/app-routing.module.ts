import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './mycomponent/page-not-found/page-not-found.component';
import { WelcomeComponent } from './mycomponent/welcome/welcome.component';



const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path: 'welcome', component:WelcomeComponent},


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
