import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';
import { RevenuesComponent } from './components/dashboard/revenues/revenues.component';
import * as path from 'path';
import { DebtsComponent } from './components/dashboard/debts/debts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [GuardGuard]
  },

  {
    path: 'revenus' , component: RevenuesComponent
  },
  {
    path: 'debts' , component: DebtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
