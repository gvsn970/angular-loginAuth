import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {LogoutComponent} from './logout/logout.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuardService} from './service/auth-guard.service';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"logout",component:LogoutComponent,canActivate:[AuthGuardService]},
  {path:"welcome",component:WelcomeComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
