import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProfileComponent} from './views/profile/profile.component';


export const DEFAULT_ROUTE = '/home';

const routes: Routes = [
  {path: '', redirectTo: DEFAULT_ROUTE, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'perfil/:username', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
