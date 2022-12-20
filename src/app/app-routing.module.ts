import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptComponent } from './compt/compt.component';
import { Compt2Component } from './compt2/compt2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home', component: Compt2Component
  },
  {
    path: 'personajes', component: ComptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
