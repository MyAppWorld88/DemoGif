import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


import { GiflistComponent } from './giflist/giflist.component';



const routes: Routes = [
    {path: 'gif', component:GiflistComponent},
    {path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureroutingModule { }