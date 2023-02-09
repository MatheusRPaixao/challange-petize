import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {PerfilComponent} from './views/perfil/perfil.component';


export const DEFAULT_ROUTE = '/home';

const routes: Routes = [
  {path: '', redirectTo: DEFAULT_ROUTE, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
