import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
{
 path:'today', component: TodayComponent
},
{
  path:'login', component: LoginComponent},
{
  path:'signup', component: SignupComponent},
{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
