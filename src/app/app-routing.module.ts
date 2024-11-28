import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicGuard } from './data/guards/public.guard';
import { AuthGuard } from './data/guards/auth.guard';
import { LoginComponent } from './presentation/features/auth/pages/login/login.component';
import { HomeComponent } from './presentation/features/auth/pages/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [PublicGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
