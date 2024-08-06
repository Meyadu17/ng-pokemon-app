import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Attention à l'ordre des routes !
const routes: Routes = [
  { path:'', redirectTo: 'accueil', pathMatch: 'full'},
  //** pour dire TOUTE les URL, page à toutjours laisser en dernier :
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
