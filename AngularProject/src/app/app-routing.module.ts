import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserService } from './user.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[UserService] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lessons', component:LessonsComponent, canActivate:[UserService] },
  { path: 'user-stats', component:UserStatsComponent, canActivate:[UserService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
